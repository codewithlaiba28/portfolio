"use client";

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="bg-bg-primary pt-20 border-t border-border/50">
            <div className="container mx-auto px-6 pb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Col 1 */}
                    <div className="space-y-6">
                        <Link href="/" className="text-3xl font-heading font-extrabold tracking-tighter">
                            <span className="text-gradient">LK</span>
                        </Link>
                        <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
                            Building intelligent digital experiences. Crafting the future, one line of code at a time.
                        </p>
                    </div>

                    {/* Col 2 */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-text-primary">Quick Links</h4>
                        <ul className="space-y-4">
                            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="text-text-secondary hover:text-accent-primary transition-colors text-sm"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-text-primary">Technologies</h4>
                        <ul className="space-y-4">
                            {["Next.js", "React", "TypeScript", "AI", "Python"].map((item) => (
                                <li key={item}>
                                    <span className="text-text-secondary text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4 */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-text-primary">Connect</h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/codewithlaiba28"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:shadow-[0_0_15px_var(--color-glow)] hover:-translate-y-1 transition-all group border-border/30"
                                title="GitHub"
                            >
                                <svg className="w-5 h-5 text-text-secondary/50 group-hover:text-accent-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/laiba-khan-2a4b63335/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:shadow-[0_0_15px_var(--color-glow)] hover:-translate-y-1 transition-all group border-border/30"
                                title="LinkedIn"
                            >
                                <svg className="w-5 h-5 text-text-secondary/50 group-hover:text-accent-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/your-username/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:shadow-[0_0_15px_var(--color-glow)] hover:-translate-y-1 transition-all group border-border/30"
                                title="Instagram"
                            >
                                <svg className="w-5 h-5 text-text-secondary/50 group-hover:text-accent-primary transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-border/30 bg-bg-primary/50 py-8">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-text-secondary font-medium tracking-wider space-y-4 md:space-y-0">
                    <p>© 2026 LAIBA KHAN</p>
                    <p className="flex items-center">
                        DESIGNED & BUILT WITH <span className="text-accent-primary mx-1.5 animate-pulse text-sm">❤️</span> BY LAIBA KHAN
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
