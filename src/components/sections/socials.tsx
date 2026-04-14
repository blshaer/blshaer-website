"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { ExternalIcon, SectionTitle } from "@/components/layout/profile-header";
import RichPopover from "@/components/ui/smoothui/rich-popover";

interface Social {
    platform: string;
    icon: React.ReactNode;
    handle: string;
    href: string;
}

const SOCIALS: Social[] = [
    {
        platform: "LinkedIn",
        icon: <LinkedInIcon />,
        handle: "@blshaer",
        href: "https://www.linkedin.com/in/blshaer/",
    },
    {
        platform: "GitHub",
        icon: <GitHubIcon />,
        handle: "@blshaer",
        href: "https://github.com/blshaer/",
    },
    {
        platform: "X",
        icon: <XIcon />,
        handle: "@blshaer",
        href: "https://x.com/blshaer/",
    },
    {
        platform: "Youtube",
        icon: <YoutubeFilledIcon />,
        handle: "@blshaer",
        href: "https://www.youtube.com/@blshaer",
    },
    {
        platform: "Email",
        icon: <MailFilledIcon />,
        handle: "blshaer@outlook.com",
        href: "mailto:blshaer@outlook.com",
    },
];

export default function Socials() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-5"
        >
            <SectionTitle>socials.</SectionTitle>

            <div className="flex flex-col gap-2">
                {SOCIALS.map((social, index) => {
                    const isEmail = social.href.startsWith('mailto:');

                    const content = (
                        <Link
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-3 py-2 -mx-3 rounded-xl group w-fit hover:bg-muted/40 transition-all border border-transparent hover:border-border/50 cursor-pointer"
                        >
                            <span className="text-muted-foreground/60 group-hover:text-foreground transition-colors w-5 flex justify-center">
                                {social.icon}
                            </span>
                            <span className="text-[0.88rem] text-muted-foreground group-hover:text-foreground transition-colors">
                                {social.handle}
                            </span>
                            <span className="text-muted-foreground/30 group-hover:text-muted-foreground/80 transition-colors">
                                <ExternalIcon />
                            </span>
                        </Link>
                    );

                    if (isEmail) return <div key={index}>{content}</div>;

                    return (
                        <RichPopover
                            key={index}
                            trigger={content}
                            title={social.platform}
                            description={`Connect with me on ${social.platform}. I share my latest projects and technical insights here.`}
                            href={social.href}
                            icon={social.icon}
                            side="top"
                            align="start"
                        />
                    );
                })}
            </div>
        </motion.section >
    );
}

// --- SVG Icons ---

function GitHubIcon() {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

function XIcon() {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}
function YoutubeFilledIcon() {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
    );
}

function MailFilledIcon() {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
    );
}
