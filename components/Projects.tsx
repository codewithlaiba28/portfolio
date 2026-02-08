"use client";

import Link from "next/link";
import ProjectCard, { type Project } from "./ProjectCard";
import ScrollAnimation from "./ScrollAnimation";

export const projects: Project[] = [
    {
        title: "Physical AI & Humanoid Robotics",
        desc: "A comprehensive interactive textbook and platform for mastering Physical AI, ROS 2, and Humanoid Robotics development.",
        tags: ["Docusaurus", "React", "TypeScript", "ROS 2", "Claude Code", "Speckit"],
        gradient: "from-emerald-900 to-teal-950",
        image: "/physical_ai_collection.png",
        liveLink: "https://hackahton-book.vercel.app/",
        githubLink: "https://github.com/codewithlaiba28/Hackahton-book",
    },
    {
        title: "AI Task Management System",
        desc: "A Next-generation task management platform featuring a minimal 'Vapor' aesthetic and streamlined workflow integration.",
        tags: ["Next.js", "TypeScript", "FastAPI", "Better Auth", "Claude Code", "Speckit"],
        gradient: "from-gray-900 to-emerald-950",
        image: "/ai_task_collection.png",
        liveLink: "https://hackathon-ii-phase-ii-frontend.vercel.app/",
        githubLink: "https://github.com/codewithlaiba28/Hackathon-_II/tree/main/phase-II",
    },
    {
        title: "Essential Elegance",
        desc: "A luxury fashion landing page designed for modern minimalists, featuring timeless silhouettes and premium sustainable materials.",
        tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
        gradient: "from-gray-900 via-stone-900 to-emerald-950",
        image: "/essential_elegance_collection.png",
        liveLink: "https://essential-elegance.vercel.app/",
        githubLink: "https://github.com/codewithlaiba28/clothes_landing_page_using_next_js",
    },
    {
        title: "Coffee Paradise",
        desc: "A premium coffee shop landing page featuring a curated menu, artisan gallery, and elegant hover-driven interactions.",
        tags: ["Vite", "JavaScript", "Tailwind CSS", "AESTHETIC"],
        gradient: "from-gray-900 via-orange-950 to-emerald-950",
        image: "/coffee_paradise_collection.png",
        liveLink: "https://coffe-self.vercel.app/",
        githubLink: "https://github.com/codewithlaiba28/coffe",
    },
    {
        title: "Bistro Bliss",
        desc: "A comprehensive full-stack restaurant website featuring a dynamic menu, event management services, and a seamless online booking system.",
        tags: ["React.js", "HTML5", "CSS3", "JavaScript"],
        gradient: "from-gray-900 via-rose-950 to-emerald-950",
        image: "/bistro_bliss_collection.png",
        liveLink: "https://food-website-one-pink.vercel.app/",
        githubLink: "https://github.com/codewithlaiba28/FOOD-WEBSITE",
    },
    {
        title: "Modern Todo App",
        desc: "A professional-grade task management dashboard featuring a high-performance interactive UI and streamlined productivity workflows.",
        tags: ["React.js", "Vite", "Tailwind CSS", "Productivity"],
        gradient: "from-gray-900 via-emerald-950 to-emerald-900",
        image: "/modern_todo_collection.png",
        liveLink: "https://todo-app-using-react-nine.vercel.app/",
        githubLink: "https://github.com/codewithlaiba28/Todo-app-using-react",
    },
    {
        title: "Smart E-Commerce Platform",
        desc: "A full-stack online store with AI-powered product recommendations and dynamic pricing.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Python"],
        gradient: "from-emerald-600 to-teal-600",
        liveLink: "#",
        githubLink: "#",
    },
    {
        title: "Developer Portfolio Generator",
        desc: "A tool that auto-generates stunning, responsive portfolio websites using AI and modern templates.",
        tags: ["React.js", "TypeScript", "OpenAI SDK", "CSS3"],
        gradient: "from-emerald-400 to-teal-500",
        liveLink: "#",
        githubLink: "#",
    },
    {
        title: "Data Pipeline Automation",
        desc: "Automated ETL pipelines with real-time monitoring dashboard built with Python and React.",
        tags: ["Python", "React.js", "Automation", "TypeScript"],
        gradient: "from-teal-500 to-emerald-600",
        liveLink: "#",
        githubLink: "#",
    },
    {
        title: "AI-Driven Task Manager",
        desc: "A productivity app with AI-powered task prioritization, smart scheduling, and natural language input.",
        tags: ["Next.js", "Agentic AI", "TypeScript", "Tailwind CSS"],
        gradient: "from-emerald-500 to-teal-400",
        liveLink: "#",
        githubLink: "#",
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6">
                <ScrollAnimation className="mb-16">
                    <div className="flex items-center space-x-2 text-accent-primary mb-4">
                        <span className="w-8 h-[1px] bg-accent-primary"></span>
                        <span className="text-sm font-bold tracking-widest uppercase">Projects</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold">What I&apos;ve Built</h2>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-16">
                    {projects.slice(0, 6).map((project, idx) => (
                        <ProjectCard key={project.title} project={project} idx={idx} />
                    ))}
                </div>

                <ScrollAnimation className="flex justify-center">
                    <Link
                        href="/projects"
                        className="group relative px-8 py-4 bg-transparent border border-accent-primary/50 text-accent-primary font-bold rounded-full overflow-hidden transition-all duration-300 hover:border-accent-primary hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View All Projects
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </Link>
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default Projects;
