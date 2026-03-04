"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import { SectionTitle, ExternalIcon } from "./ProfileHeader";

interface WorkExperience {
    title: string;
    company: string;
    website: string;
    websiteLabel: string;
    period: string;
    points: string[];
    techStack: string[];
}

const EXPERIENCES: WorkExperience[] = [
    {
        title: "Full Stack Developer",
        company: "SamTax",
        website: "https://sam-tax.com/",
        websiteLabel: "sam-tax.com",
        period: "Jan 2025 - Present",
        points: [
            "Built and maintained a secure full-stack web platform for tax management and reporting.",
            "Implemented internal automation tools to streamline data processing and client communication.",
            "Developed high-performance admin and client dashboards using React and Node.js.",
            "Architected scalable database schemas to handle complex financial data securely.",
        ],
        techStack: [
            "React", "Node.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "AWS",
        ],
    },
    {
        title: "Frontend Developer",
        company: "Sustainable Star LLC",
        website: "https://www.linkedin.com/company/sustainable-star-sa/",
        websiteLabel: "Sustainable Star",
        period: "Jun 2023 - Oct 2023",
        points: [
            "Designed and implemented complex UI components for sustainable energy monitoring systems.",
            "Collaborated with UX designers to translate wireframes into pixel-perfect, responsive web applications.",
            "Optimized frontend performance, reducing initial load times by 30%.",
        ],
        techStack: [
            "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Query",
        ],
    },
    {
        title: "Frontend Developer",
        company: "Perfect Touch (PTIT)",
        website: "http://ptit.com.sa/",
        websiteLabel: "ptit.com.sa",
        period: "Jun 2023 - Sep 2023",
        points: [
            "Developed custom CRM solutions for small to medium-sized enterprises.",
            "Integrated third-party APIs for seamless data synchronization across multiple platforms.",
            "Mentored junior developers on modern frontend best practices and state management.",
        ],
        techStack: [
            "React", "Redux", "SASS", "JavaScript", "REST APIs",
        ],
    },
    {
        title: "Software Engineer Intern",
        company: "GEDCO",
        website: "#",
        websiteLabel: "gedco.ps",
        period: "Apr 2022 - Jun 2022",
        points: [
            "Assisted in the development of internal inventory management software.",
            "Participated in daily stand-ups and code reviews following Agile methodology.",
            "Wrote unit tests and performed manual testing to ensure software reliability.",
        ],
        techStack: [
            "JavaScript", "PHP", "MySQL", "Bootstrap", "Git",
        ],
    },
];

export default function WorkedAs() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            id="work"
            className="flex flex-col gap-5"
        >
            <SectionTitle>worked as.</SectionTitle>

            <div className="flex flex-col gap-1">
                {EXPERIENCES.map((exp, index) => (
                    <WorkCard key={index} experience={exp} />
                ))}
            </div>
        </motion.section>
    );
}

function WorkCard({ experience }: { experience: WorkExperience }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="rounded-xl overflow-hidden">
            {/* Header (always visible) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex flex-col sm:flex-row sm:items-start justify-between p-4 text-left group hover:bg-muted/40 transition-all rounded-xl gap-3 sm:gap-4 border border-transparent hover:border-border/50 hover:shadow-sm"
            >
                <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-[0.95rem] font-semibold text-foreground">
                            {experience.title}
                        </h3>
                        <span className="text-muted-foreground/20 text-[0.8rem] hidden sm:block">•</span>
                        {experience.website !== "#" ? (
                            <Link
                                href={experience.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-[0.9rem] font-medium text-muted-foreground hover:text-foreground transition-all flex items-center gap-1 group/link"
                            >
                                {experience.company}
                                <div className="transition-all duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 opacity-0 group-hover/link:opacity-100">
                                    <ExternalIcon />
                                </div>
                            </Link>
                        ) : (
                            <span className="text-[0.9rem] font-medium text-muted-foreground/60 cursor-default">
                                {experience.company}
                            </span>
                        )}
                    </div>
                    {/* Compact Tech Preview */}
                    <p className="text-[0.72rem] text-muted-foreground/50 font-medium truncate max-w-[250px] sm:max-w-none">
                        {experience.techStack.join(" • ")}
                    </p>
                </div>

                <div className="flex items-center gap-4 shrink-0 sm:pt-1">
                    <span className="text-[0.78rem] text-muted-foreground/60 font-medium">
                        {experience.period}
                    </span>
                    <div className="text-muted-foreground/40 group-hover:text-foreground transition-colors">
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                </div>
            </button>

            {/* Expandable Content */}
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
                            {/* Bullet Points */}
                            <ul className="flex flex-col gap-3 ml-1">
                                {experience.points.map((point, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="mt-2 w-[5px] h-[5px] rounded-full bg-primary/40 shrink-0" />
                                        <p className="text-[0.88rem] text-muted-foreground leading-[1.6]">
                                            {point}
                                        </p>
                                    </li>
                                ))}
                            </ul>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-1.5">
                                {experience.techStack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-[0.7rem] text-muted-foreground bg-muted/30 border border-border/50 px-2 py-0.5 rounded-md font-medium"
                                    >
                                        {tech}
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
