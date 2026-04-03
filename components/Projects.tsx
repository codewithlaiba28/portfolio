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
        title: "Eid Mubarak Celebration 2026",
        desc: "A premium Eid-ul-Fitr platform featuring spiritual resources, celebratory greetings, and interactive card customization.",
        tags: ["Next.js", "Framer Motion", "AOS", "Tailwind CSS", "Interactive UI"],
        gradient: "from-orange-950 via-amber-900 to-emerald-950",
        image: "/eid_mubarak_collection.png",
        liveLink: "https://eid-ul-fitr-rust.vercel.app/",
        githubLink: "https://github.com/codewithlaiba28/eid-ul-fitr",
    },
    {
        title: "Ramadan Mubarak 2026",
        desc: "A comprehensive Ramadan companion app featuring precise prayer times, fasting schedules, spiritual guides, and interactive dhikr tools.",
        tags: ["Next.js", "React 19", "Tailwind CSS", "TypeScript", "Multilingual"],
        gradient: "from-emerald-950 via-teal-900 to-emerald-900",
        image: "/ramadan_2026_collection.png",
        liveLink: "https://ramzan-2026.app/",
        githubLink: "https://github.com/codewithlaiba28/Ramzan-2026",
    },
    {
        title: "Ramadan Mubarak 2025",
        desc: "A dedicated spiritual resources landing page for the holy month of Ramadan 2025, featuring prayer times and Ashra guides.",
        tags: ["HTML5", "CSS3", "JavaScript", "Landing Page"],
        gradient: "from-teal-950 via-emerald-900 to-teal-900",
        image: "/ramadan_2025_collection.png",
        liveLink: "https://ramadan-website-seven.vercel.app/",
        githubLink: "https://github.com/codewithlaiba28/Ramadan_website",
    },
    {
        title: "Noir Éclat",
        desc: "A high-fidelity luxury jewelry e-commerce platform featuring a sophisticated 'Signature Vault' collection and a streamlined 'Active Protocol' checkout system.",
        tags: ["Next.js 16", "Tailwind CSS 4", "Framer Motion", "Lucide React", "TypeScript"],
        gradient: "from-stone-950 via-gray-900 to-emerald-950",
        image: "/noireclat_collection.png",
        liveLink: "https://noireclat.vercel.app/",
        githubLink: "https://github.com/codewithlaiba28/jewelry-ecommerce-website",
    },
    {
        title: "Practice Portfolio (Legacy)",
        desc: "A fully animated and responsive personal portfolio landing page, developed as a foundational training project to master core frontend interactions.",
        tags: ["HTML5", "CSS3", "JavaScript", "Practice", "Animated"],
        gradient: "from-cyan-950 via-teal-900 to-black",
        image: "/practice_portfolio_collection.png",
        liveLink: "https://practice-portfolio-virid.vercel.app/",
        githubLink: "https://github.com/codewithlaiba28/practice_portfolio",
    },
    {
        title: "Word Guess Game",
        desc: "A fully interactive and responsive Hangman game featuring a vibrant forest-themed UI, dynamic animations, and state-driven gaming logic.",
        tags: ["HTML5", "CSS3", "JavaScript", "Game Dev", "Responsive"],
        gradient: "from-emerald-950 via-teal-900 to-emerald-900",
        image: "/word_guess_collection.png",
        liveLink: "https://guessword-beta.vercel.app/",
        githubLink: "https://github.com/codewithlaiba28/Word_guess",
    },
    {
        title: "Wayne Watch Store",
        desc: "A luxury watch e-commerce platform with AI-powered search, brand & price filtering, and an interactive React Leaflet map to locate the nearest branch.",
        tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS 4", "React Leaflet"],
        gradient: "from-stone-950 via-teal-950 to-emerald-950",
        image: "/watch_store_collection.png",
        liveLink: "https://watch-ecommerce-website.vercel.app/",
        githubLink: "https://github.com/codewithlaiba28/watch-ecommerce-website",
    },
    {
        title: "Currency Converter (Legacy)",
        desc: "A real-time currency converter supporting multiple international currencies with live exchange rates, flag indicators, and a clean glassmorphism UI.",
        tags: ["HTML5", "CSS3", "JavaScript", "API Integration", "Legacy"],
        gradient: "from-gray-950 via-stone-900 to-emerald-950",
        image: "/currency_converter_collection.png",
        liveLink: "https://currency-convertor-five-ebon.vercel.app/",
        githubLink: "https://github.com/codewithlaiba28/Currency_convertor",
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
