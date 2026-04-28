"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfilePic from "@/app/ProfilePic.png";
import { FileDown } from "lucide-react";

export default function ProfileHeader() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-10"
        >
            {/* Profile Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 group">

                {/* Profile Image */}
                <div className="relative">
                    <div className="w-[72px] h-[72px] rounded-full bg-muted border border-border overflow-hidden flex items-center justify-center">
                        <Image
                            src={ProfilePic}
                            alt="Baraa Alshaer"
                            width={72}
                            height={72}
                            className="w-full h-full object-cover transition-all duration-500 group-hover:grayscale"
                            priority
                        />
                    </div>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-0.5">
                    <h1 className="text-[1.5rem] sm:text-[1.7rem] font-bold tracking-tight text-foreground flex items-center gap-2 group">
                        Hi, I'm Baraa
                    </h1>

                    <p className="text-muted-foreground text-[0.88rem] sm:text-[0.95rem]">
                        Full Stack Engineer               </p>
                </div>
            </div>

            {/* About Me */}
            <div className="flex flex-col gap-4">
                <SectionTitle>about me.</SectionTitle>

                <div className="flex flex-col gap-4 text-[0.92rem] sm:text-[0.95rem] text-muted-foreground leading-[1.7]">
                    <p>
                        I’m a Full Stack Engineer specialized in building scalable SaaS platforms, modern digital products, and AI-powered solutions <span className="text-foreground/80 ">from zero to launch</span>. <br /><br />
                        With hands-on experience across frontend, backend, and product architecture, I create software focused on performance, clean user experience, and long-term maintainability. <br /><br />
                        My approach is simple: build fast, build clean, and build products that solve real problems.
                    </p>

                </div>

                {/* CTA Box */}
                <div className="mt-2 bg-gradient-to-br from-muted/50 to-transparent border border-border rounded-2xl p-6 flex flex-col gap-4 shadow-sm">
                    <p className="text-[0.95rem] text-foreground/90 leading-relaxed">
                        Need a technical partner to bring your vision to life?
                        Let&apos;s discuss how we can{" "}
                        <span className="font-semibold text-foreground underline decoration-primary/20 underline-offset-4">
                            build
                        </span>{" "}
                        something exceptional.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-3">
                        <Link
                            href="mailto:blshaer@outlook.com"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-[0.82rem] font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Get in Touch
                        </Link>
                        <Link
                            href="/Baraa_Alshaer.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-muted/50 text-foreground text-[0.82rem] font-medium px-4 py-2 rounded-lg hover:bg-muted transition-all border border-border"
                        >
                            <FileDown size={14} className="text-muted-foreground" />
                            Download Resume
                        </Link>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-[1.15rem] font-serif italic text-foreground tracking-tight opacity-80">
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