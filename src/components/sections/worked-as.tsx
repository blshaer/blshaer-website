"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, MapPin } from "lucide-react";
import { SectionTitle, ExternalIcon } from "@/components/layout/profile-header";

import Image from "next/image";
import USFlag from "@flags/us.svg";
import SAFlag from "@flags/sa.svg";
import PSFlag from "@flags/ps.svg";

interface WorkExperience {
    title: string;
    company: string;
    location: string;
    countryCode?: "US" | "SA" | "PS";
    website: string;
    websiteLabel: string;
    period: string;
    points: string[];
    techStack: string[];
    type: string;
}

const FLAGS = {
    US: USFlag,
    SA: SAFlag,
    PS: PSFlag,
};

const EXPERIENCES: WorkExperience[] = [
    {
        title: "Full Stack Developer",
        company: "SamTax",
        location: "Philadelphia, USA (Remote)",
        countryCode: "US",
        website: "https://sam-tax.com/",
        websiteLabel: "sam-tax.com",
        period: "Sep 2025 – Mar 2026",
        type: "Full-time Remote",
        points: [
            "Built and maintained a full-stack platform for tax and client management.",
            "Developed admin and client dashboards for handling documents, appointments, invoices, and reports.",
            "Implemented authentication and role-based access for secure data handling.",
            "Designed database structures to manage financial and client data efficiently.",
            "Built features for document uploads, tracking, and client communication.",
            "Improved overall system structure and UI consistency over time.",
        ],
        techStack: [
            "Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "ShadCN UI",
        ],
    },
    {
        title: "Frontend Developer",
        company: "Sustainable Star LLC",
        location: "Riyadh, Saudi Arabia (Remote)",
        countryCode: "SA",
        website: "http://sustainablestar.com.sa/",
        websiteLabel: "Sustainable Star",
        period: "Jun 2023 – Oct 2023",
        type: "Full-time Remote",
        points: [
            "Worked on a full product including website, dashboards, and a drag-and-drop form builder system.",
            "Built reusable UI components and dynamic form interfaces.",
            "Implemented form logic features such as conditional flows and field validation (regex-based).",
            "Developed dashboards for managing submissions and user data.",
            "Collaborated with the team to maintain a consistent and scalable frontend architecture.",
        ],
        techStack: [
            "React", "TypeScript", "ShadCN UI", "State Management", "Form Validation (Regex)",
        ],
    },
    {
        title: "Frontend Developer",
        company: "Perfect Touch (PTIT)",
        location: "Riyadh, Saudi Arabia (Remote)",
        countryCode: "SA",
        website: "http://ptit.com.sa/",
        websiteLabel: "ptit.com.sa",
        period: "Jun 2023 – Sep 2023",
        type: "Part-time Remote",
        points: [
            "Developed frontend features for CRM and internal business systems used by small to medium-sized clients.",
            "Built reusable UI components to support faster development across multiple screens and modules.",
            "Integrated REST APIs and handled data rendering across dashboards and forms.",
            "Improved UI structure and usability for client-facing and internal tools.",
            "Collaborated with the team on feature updates and frontend consistency.",
        ],
        techStack: [
            "React", "JavaScript", "SASS", "REST APIs",
        ],
    },
    {
        title: "Software Engineer Intern",
        company: "GEDCO",
        location: "Rafah, Palestine",
        countryCode: "PS",
        website: "http://gedco.ps/",
        websiteLabel: "gedco.ps",
        period: "Apr 2022 – Jun 2022",
        type: "Full-time",
        points: [
            "Assisted in developing an internal inventory and data management system.",
            "Worked with MySQL databases, writing SQL queries for data retrieval, updates, and basic reporting tasks.",
            "Supported data validation and structured data handling for system operations.",
            "Participated in team workflow and followed basic Agile practices.",
            "Assisted in testing and debugging to improve data accuracy and system stability.",
            "Gained hands-on experience working with relational databases and real-world data systems.",
        ],
        techStack: [
            "MySQL", "SQL", "Git",
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
                    <WorkCard key={index} experience={exp} defaultOpen={index === 0} />
                ))}
            </div>
        </motion.section>
    );
}

function WorkCard({ experience, defaultOpen = false }: { experience: WorkExperience; defaultOpen?: boolean }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

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
                    {/* Location Preview */}
                    <p className="text-[0.72rem] text-muted-foreground/60 font-medium truncate max-w-[250px] sm:max-w-none flex items-center gap-1.5">
                        {experience.countryCode && FLAGS[experience.countryCode] ? (
                            <Image
                                src={FLAGS[experience.countryCode]}
                                alt={`${experience.countryCode} flag`}
                                width={14}
                                height={14}
                                className="rounded-sm object-cover"
                            />
                        ) : (
                            <MapPin size={10} className="shrink-0" />
                        )}
                        {experience.location}
                    </p>
                </div>

                <div className="flex items-center gap-4 shrink-0 sm:pt-1">
                    <div className="flex flex-col items-end gap-1">
                        <span className="text-[0.78rem] text-muted-foreground/60 font-medium whitespace-nowrap">
                            {experience.period}
                        </span>
                        <span className="text-[0.62rem] text-muted-foreground/40 font-semibold uppercase tracking-wider whitespace-nowrap hidden sm:block">
                            {experience.type}
                        </span>
                    </div>
                    <div className="text-muted-foreground/40 group-hover:text-foreground transition-colors mb-auto sm:mb-0 mt-[2px] sm:mt-0">
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
                                        <p className="text-[0.88rem] text-foreground/70 dark:text-muted-foreground leading-[1.6]">
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
