"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "./ProfileHeader";
import Link from "next/link";

interface Project {
    name: string;
    badges: { label: string; color: string }[];
    stack: string;
    links: { label: string; href: string }[];
}

const PROJECTS: Project[] = [
    {
        name: "Samtax",
        badges: [{ label: "✦ Maintained", color: "text-amber-600 dark:text-yellow-500 bg-amber-500/10 border-amber-500/20" }],
        stack: "full-stack / automation",
        links: [{ label: "Live Preview", href: "https://sam-tax.com/" }],
    },
    {
        name: "SFB – Sustainable Form Builder",
        badges: [{ label: "★ Open Source", color: "text-emerald-600 dark:text-green-400 bg-emerald-500/10 border-emerald-500/20" }],
        stack: "frontend / architecture",
        links: [{ label: "Live Preview", href: "#" }],
    },
    {
        name: "GradlyAI",
        badges: [{ label: "★ AI Powered", color: "text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20" }],
        stack: "ai integration / full-stack",
        links: [{ label: "Live Preview", href: "#" }],
    },
    {
        name: "Barber Academy",
        badges: [{ label: "★ Finished", color: "text-emerald-600 dark:text-green-400 bg-emerald-500/10 border-emerald-500/20" }],
        stack: "frontend / ui-ux",
        links: [{ label: "Live Preview", href: "#" }],
    },
];

export default function Projects() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col gap-5"
        >
            <SectionTitle>projects.</SectionTitle>

            <div className="grid grid-cols-1 gap-4">
                {PROJECTS.map((project) => (
                    <div
                        key={project.name}
                        className="group p-5 rounded-xl bg-muted/30 border border-border hover:border-border/80 transition-all"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                            <div className="flex flex-col gap-1.5 cursor-default">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <h3 className="text-[1.05rem] font-bold text-foreground group-hover:text-primary transition-colors">
                                        {project.name}
                                    </h3>
                                    {project.badges.map((badge) => (
                                        <span
                                            key={badge.label}
                                            className={`text-[0.62rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${badge.color}`}
                                        >
                                            {badge.label}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-[0.78rem] sm:text-[0.82rem] text-muted-foreground uppercase tracking-widest font-medium">
                                    {project.stack}
                                </p>
                            </div>

                            <div className="flex items-center gap-3 sm:pt-1">
                                {project.links.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="text-[0.82rem] text-muted-foreground hover:text-foreground transition-all flex items-center gap-1 group/link"
                                    >
                                        {link.label}
                                        <div className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
                                            <ExternalIcon />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}

function ExternalIcon() {
    return (
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
    );
}
