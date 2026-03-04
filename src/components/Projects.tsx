"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "./ProfileHeader";
import Link from "next/link";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import Microlink from "@microlink/react";

interface Project {
    name: string;
    stack: string;
    links: { label: string; href: string }[];
}

const PROJECTS: Project[] = [
    {
        name: "Samtax",
        stack: "full-stack / automation",
        links: [
            { label: "Live Preview", href: "https://sam-tax.com/" },
            { label: "GitHub", href: "https://github.com/blshaer" },
        ],
    },
    {
        name: "SFB – Sustainable Form Builder",
        stack: "frontend / architecture",
        links: [
            { label: "Live Preview", href: "https://github.com/blshaer" },
            { label: "GitHub", href: "https://github.com/blshaer" },
        ],
    },
    {
        name: "GradlyAI",
        stack: "ai integration / full-stack",
        links: [
            { label: "Live Preview", href: "https://github.com/blshaer" },
            { label: "GitHub", href: "https://github.com/blshaer" },
        ],
    },
    {
        name: "Barber Academy",
        stack: "frontend / ui-ux",
        links: [
            { label: "Live Preview", href: "https://github.com/blshaer" },
            { label: "GitHub", href: "https://github.com/blshaer" },
        ],
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

            <div className="grid grid-cols-1 gap-0">
                {PROJECTS.map((project) => (
                    <div
                        key={project.name}
                        className="group p-5 rounded-2xl hover:bg-muted/40 transition-all border border-transparent hover:border-border/50 hover:shadow-sm"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                            <div className="flex flex-col gap-1 cursor-default">
                                <h3 className="text-[1.05rem] font-bold text-foreground group-hover:text-primary transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-[0.68rem] sm:text-[0.58rem] text-muted-foreground uppercase tracking-widest font-semibold">
                                    {project.stack}
                                </p>
                            </div>

                            <div className="flex items-center gap-3 sm:pt-1">
                                {project.links.map((link) => (
                                    <HoverCard key={link.label}>
                                        <HoverCardTrigger asChild>
                                            <Link
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[0.82rem] text-muted-foreground hover:text-primary transition-all flex items-center gap-1 group/link"
                                            >
                                                {link.label}
                                                <div className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 opacity-60 group-hover/link:opacity-100">
                                                    <ExternalIcon />
                                                </div>
                                            </Link>
                                        </HoverCardTrigger>
                                        {link.href !== "#" && (
                                            <HoverCardContent className="w-[300px] p-0 overflow-hidden border border-border bg-card shadow-2xl scale-95 animate-in fade-in duration-200 z-50" side="top" align="end">
                                                <Microlink
                                                    url={link.href}
                                                    size="medium"
                                                    style={{
                                                        width: '100%',
                                                        border: 'none',
                                                        borderRadius: '0px',
                                                        '--microlink-background-color': 'var(--card)',
                                                        '--microlink-color': 'var(--foreground)',
                                                        '--microlink-hover-background-color': 'var(--accent)',
                                                        '--microlink-border-color': 'transparent'
                                                    } as React.CSSProperties}
                                                />
                                            </HoverCardContent>
                                        )}
                                    </HoverCard>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.section >
    );
}

function ExternalIcon() {
    return (
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
    );
}
