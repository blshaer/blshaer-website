"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProfileHeader() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-10"
        >
            {/* Profile Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
                <div className="relative">
                    {/* Profile Image Placeholder */}
                    <div className="w-[72px] h-[72px] rounded-full bg-muted border border-border overflow-hidden flex items-center justify-center text-[9px] text-muted-foreground uppercase tracking-widest">
                        img
                    </div>
                </div>
                <div className="flex flex-col gap-0.5">
                    <h1 className="text-[1.5rem] sm:text-[1.7rem] font-bold tracking-tight text-foreground flex items-center gap-2">
                        Baraa Alshaer{" "}
                        <span className="inline-block animate-wave origin-[70%_70%]">
                            👋
                        </span>
                    </h1>
                    <p className="text-muted-foreground text-[0.88rem] sm:text-[0.95rem]">Full-Stack Engineer</p>
                </div>
            </div>

            {/* About Me */}
            <div className="flex flex-col gap-4">
                <SectionTitle>about me.</SectionTitle>

                <div className="flex flex-col gap-4 text-[0.92rem] sm:text-[0.95rem] text-muted-foreground leading-[1.7]">
                    <p>
                        I build intelligent, scalable software solutions by combining full-stack expertise with smart AI integration. With 5+ years of experience in front-end and back-end development, I create solutions that are robust, user-friendly, and powered by AI to solve real-world problems efficiently.
                    </p>

                    <p>
                        Driven by clean code and innovative design, I bring ideas to life with software that&apos;s both functional and future-ready. Let&apos;s build smarter applications together.
                    </p>
                </div>

                {/* CTA Box */}
                <div className="mt-2 bg-muted/40 border border-border rounded-xl p-5 flex flex-col gap-4 transition-colors">
                    <p className="text-[0.92rem] text-foreground/80">
                        Interested in working together? Feel <span className="font-semibold text-foreground">free</span> to schedule a
                        meet!
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-3">
                        <Link
                            href="mailto:blshaer@outlook.com"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-[0.82rem] font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Get in Touch
                        </Link>
                        <Link
                            href="#"
                            className="inline-flex items-center gap-1 text-[0.82rem] text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Resume{" "}
                            <ExternalIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-[1.1rem] font-serif italic text-muted-foreground tracking-tight">
            {children}
        </h2>
    );
}

function InlineLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            className="text-foreground underline underline-offset-[3px] decoration-border hover:decoration-muted-foreground transition-all font-medium"
        >
            {children}
        </Link>
    );
}

export function ExternalIcon({ className = "" }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`inline-block ml-0.5 ${className}`}
        >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    );
}
