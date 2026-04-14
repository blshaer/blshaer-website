"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle, ExternalIcon } from "@/components/layout/profile-header";
import Link from "next/link";
import { ChevronUp, ChevronDown } from "lucide-react";
import RichPopover from "@/components/ui/smoothui/rich-popover";

interface Project {
    name: string;
    stack: string[];
    description: string;
    points: string[];
    links: { label: string; href: string; popoverDesc: string }[];
}

const PROJECTS: Project[] = [
    {
        name: "SamTax – Full Stack Tax & Client Management Platform",
        stack: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "ShadCN UI", "Full Stack"],
        description: "Full-stack platform for managing tax, immigration, and financial services with role-based dashboards.",
        points: [
            "Built a full-stack platform for managing tax, immigration, and financial services.",
            "Developed dashboards covering clients, users, appointments, documents, invoices, and reports.",
            "Implemented authentication and role-based access for admin and client workflows.",
            "Built document handling features (uploading, storing, and accessing files securely).",
            "Integrated email workflows and reporting features to support daily operations.",
            "Structured the application using reusable components and modular architecture.",
        ],
        links: [
            { label: "Live Preview", href: "https://sam-tax.com/", popoverDesc: "Experience the SamTax platform live. Secure, automated tax and client management." },
        ],
    },
    {
        name: "SustainableStar Form Builder (SFB) – Frontend Developer",
        stack: ["React", "TypeScript", "ShadCN UI", "Frontend"],
        description: "Contributed to a full system including website, dashboards, and a drag-and-drop form builder.",
        points: [
            "Contributed to a full system including website, dashboards, and a drag-and-drop form builder.",
            "Built dynamic form behavior with conditional logic and custom validation (regex).",
            "Developed dashboards for managing submissions, filtering, and organizing data.",
            "Implemented features such as email notifications and auto-responses.",
            "Worked within a team on a scalable, component-based frontend architecture.",
        ],
        links: [
            { label: "Live Preview", href: "https://sfb-app.com/en", popoverDesc: "Try the Sustainable Form Builder. Create complex forms with precision." },
            { label: "Demo", href: "https://youtu.be/2IqjzGT1l1c?si=U3FpceOh5uEHqlfN", popoverDesc: "Watch a comprehensive video walkthrough of the SFB features." },
        ],
    },
    {
        name: "LumeGradients – AI Gradient Generator Platform",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Supabase", "Gemini API", "Full Stack"],
        description: "Full-stack tool for generating and managing gradient designs powered by AI.",
        points: [
            "Built a full-stack tool for generating and managing gradient designs.",
            "Integrated AI to generate gradients from user prompts.",
            "Implemented authentication and basic dashboard features using Supabase.",
            "Enabled exporting gradients in multiple formats (CSS, SVG, PNG, JSON).",
            "Designed a clean interface for quick generation and usage.",
        ],
        links: [
            { label: "Live Preview", href: "https://lumegradients.vercel.app/", popoverDesc: "Create stunning AI-generated gradients in seconds with LumeGradients." },
        ],
    },
    {
        name: "NAJ Training Center – Frontend Developer",
        stack: ["React", "Material UI", "Bootstrap", "Frontend"],
        description: "Educational platform targeting dental students with responsive course browsing and scheduling interfaces.",
        points: [
            "Developed frontend pages for an educational platform targeting dental students.",
            "Built responsive interfaces for course browsing and scheduling.",
            "Used Material UI and Bootstrap for consistent and accessible UI components.",
        ],
        links: [
            { label: "Live Preview", href: "https://najtraining.com/", popoverDesc: "Visit the NAJ Training Center platform for dental education." },
        ],
    },
    {
        name: "Raouf Zadi Barber Academy – Full Stack Website",
        stack: ["React", "TypeScript", "Tailwind CSS", "Full Stack"],
        description: "Business website with service listings and booking functionality for a barber academy.",
        points: [
            "Built a business website with service listings and booking functionality.",
            "Implemented responsive UI and basic form handling for customer interaction.",
        ],
        links: [
            { label: "Live Preview", href: "http://raoufzadi.vercel.app/", popoverDesc: "Explore the Raouf Zadi Barber Academy website." },
        ],
    },
    {
        name: "Python by Example – Educational Repository",
        stack: ["Python", "Educational"],
        description: "Structured repository covering Python concepts with runnable examples for practical learning.",
        points: [
            "Created a structured repository covering Python concepts with runnable examples.",
            "Organized content for practical learning and reference.",
        ],
        links: [
            { label: "GitHub", href: "https://github.com/blshaer/python-by-example", popoverDesc: "Explore the comprehensive Python guide on GitHub." },
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

            <div className="flex flex-col gap-1">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={index} project={project} defaultOpen={index === 0} />
                ))}
            </div>

            <div className="pt-2 px-4">
                <Link
                    href="https://github.com/blshaer?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.8rem] font-semibold text-muted-foreground/60 hover:text-foreground underline underline-offset-4 decoration-border/50 hover:decoration-foreground/30 transition-all w-fit"
                >
                    check more projects on github
                </Link>
            </div>
        </motion.section >
    );
}

function ProjectCard({ project, defaultOpen = false }: { project: Project; defaultOpen?: boolean }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="rounded-xl overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex flex-col sm:flex-row sm:items-start justify-between p-4 text-left group hover:bg-muted/40 transition-all rounded-xl gap-3 sm:gap-4 border border-transparent hover:border-border/50 hover:shadow-sm"
            >
                <div className="flex flex-col gap-0.5">
                    <h3 className="text-[0.95rem] font-semibold text-foreground">
                        {project.name}
                    </h3>
                    {/* Short Description Preview */}
                    <p className="text-[0.75rem] text-muted-foreground/60 font-medium leading-[1.5] max-w-[240px] sm:max-w-[380px] md:max-w-[450px]">
                        {project.description}
                    </p>
                </div>

                <div className="flex items-center gap-4 shrink-0 sm:pt-1">
                    <div className="flex items-center gap-3">
                        {project.links.map((link) => (
                            <RichPopover
                                key={link.label}
                                trigger={
                                    <Link
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="text-[0.82rem] text-muted-foreground hover:text-foreground transition-all flex items-center gap-1 group/link opacity-60 hover:opacity-100"
                                    >
                                        {link.label}
                                        <div className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 opacity-60">
                                            <ExternalIcon />
                                        </div>
                                    </Link>
                                }
                                title={link.label}
                                description={link.popoverDesc}
                                href={link.href}
                                side="top"
                                align="end"
                            />
                        ))}
                    </div>
                    <div className="text-muted-foreground/40 group-hover:text-foreground transition-colors ml-2">
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-4 pb-5 pt-1 flex flex-col gap-5">
                            <ul className="flex flex-col gap-3 ml-1">
                                {project.points.map((point, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="mt-2 w-[5px] h-[5px] rounded-full bg-primary/40 shrink-0" />
                                        <p className="text-[0.88rem] text-muted-foreground leading-[1.6]">
                                            {point}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-1.5 px-4">
                                {project.stack.map((item, i) => (
                                    <span
                                        key={i}
                                        className="text-[0.68rem] text-muted-foreground/60 bg-muted/30 border border-border/50 px-1.5 py-0.5 rounded-md font-medium uppercase tracking-wider"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

