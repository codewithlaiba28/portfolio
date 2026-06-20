import { GoogleGenerativeAI } from '@google/generative-ai';
import { sql } from '../neon';
import { stringSimilarity } from 'string-similarity-js';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

interface Project {
    title: string;
    description: string;
    tags: string[];
    gradient: string;
    image: string;
    live_link: string;
    github_link: string;
}

interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
}

export async function getChatResponse(userMessage: string, history: ChatMessage[] = []) {
    try {
        // 1. Core Knowledge (Always present)
        const coreKnowledge = `
Name: Laiba Khan
Role: AI & Web Developer | Agentic AI Specialist
Location: Karachi, Pakistan
Summary: Passionate developer specializing in Autonomous Websites and Agentic AI.
Skills: Next.js, React, TypeScript, Python, OpenAI Agent SDK, n8n, MCP, Prompt Engineering.
        `.trim();

        // 2. Fetch all resume chunks and rank them
        const resumeChunks = await sql`SELECT content FROM resume_chunks` as { content: string }[];
        const rankedResume = resumeChunks.map((row: { content: string }) => ({
            content: row.content,
            score: stringSimilarity(userMessage.toLowerCase(), row.content.toLowerCase())
        })).sort((a: any, b: any) => b.score - a.score);

        // Get top 4 relevant chunks
        const relevantResume = rankedResume.slice(0, 4).map((item: any) => item.content);

        // 3. Fetch all projects and rank them
        const dbProjects = await sql`SELECT * FROM projects` as Project[];
        const rankedProjects = dbProjects.map(p => {
            const searchStr = `${p.title} ${p.description} ${p.tags.join(' ')}`.toLowerCase();
            const score = stringSimilarity(userMessage.toLowerCase(), searchStr);
            return { ...p, score };
        }).sort((a, b) => b.score - a.score);

        // Dynamic Project Selection
        let relevantProjects = rankedProjects.filter(p => p.score > 0.1);
        if (relevantProjects.length < 5) {
            relevantProjects = rankedProjects.slice(0, 5);
        }
        relevantProjects = relevantProjects.slice(0, 12);

        const projectContext = relevantProjects.map(p =>
            `- ${p.title}: ${p.description} (Tech: ${p.tags.join(', ')}) [ImagePath: ${p.image}] [LiveLink: ${p.live_link}] [GithubLink: ${p.github_link}]`
        ).join('\n');

        const context = `
Core Info:
${coreKnowledge}

Resume Download URL: /resume/Laiba_Khan_Resume.pdf

Relevant Resume Details:
${relevantResume.join('\n\n')}

Relevant Projects Data (from Neon DB):
${projectContext}
`.trim();

        const systemPrompt = `⚠️ GOLDEN RULE: ONLY speak about projects explicitly listed in the "Relevant Projects Data" section below. 
- If a project is not in that list, IT DOES NOT EXIST.
- NEVER invent, hallucinate, or assume she has other projects (like "Real Estate", "Ecommerce", or "Blog") if they are not listed.
- If the user asks for "more" or "all" projects and you have already shown the ones in the context, politely say: "These are all the featured projects I have in my records for now."

You are a personal AI assistant for Laiba Khan's portfolio. You have access to her real-time database containing her projects and resume.

STRICT CONCiseness & FORMATTING:
1. Speak in the third person.
2. Keep answers SHORT and snappy.
3. Use the [PROJECT_CARD: ...] tag for any project mentioned.
4. 🛡️ NEVER change or invent image paths. ONLY use the exact [ImagePath] value from the context.
5. 🛡️ NEVER output raw metadata like "ImagePath:" as plain text.
6. If asked for a resume, provide a 1-sentence summary and the [RESUME_BUTTON] tag.
7. Use the format EXACTLY: [PROJECT_CARD: Title | Description | ImagePath | LiveLink | GithubLink]

Context:
${context}
`;

        // Build Gemini chat history (convert 'assistant' -> 'model')
        // Gemini requires history to always start with a 'user' message
        let geminiHistory = history.map(msg => ({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.content }],
        }));
        // Drop any leading 'model' messages to satisfy Gemini's validation
        while (geminiHistory.length > 0 && geminiHistory[0].role === 'model') {
            geminiHistory.shift();
        }

        const model = genAI.getGenerativeModel({
            model: 'gemini-2.5-flash-lite',
            systemInstruction: systemPrompt,
        });

        const chat = model.startChat({
            history: geminiHistory,
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 1000,
            },
        });

        const result = await chat.sendMessage(userMessage);
        const rawContent = result.response.text();

        // Output Filtering: Post-process the text to strip out hallucinated project cards
        let filteredContent = rawContent;
        const cardRegex = /\[PROJECT_CARD:(.*?)\]/g;
        let match;
        while ((match = cardRegex.exec(rawContent)) !== null) {
            const cardContent = match[1];
            const parts = cardContent.split('|').map(p => p.trim());
            if (parts.length >= 3) {
                const imagePath = parts[2];
                const isRealProject = dbProjects.some(p => p.image === imagePath);
                if (!isRealProject) {
                    filteredContent = filteredContent.replace(match[0], '');
                }
            } else {
                filteredContent = filteredContent.replace(match[0], '');
            }
        }

        return filteredContent.trim();
    } catch (error) {
        console.error("Chat Error:", error);
        return "I'm sorry, I'm having trouble connecting to my database right now. Please try again in a moment!";
    }
}


