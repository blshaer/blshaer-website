"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "./ProfileHeader";

interface Recommendation {
    name: string;
    role: string;
    company: string;
    text: string;
}

const RECOMMENDATIONS: Recommendation[] = [
    {
        name: "Fahad Hummadi",
        role: "Senior Business Architect",
        company: "Perfect Touch (PTIT)",
        text: "Baraa consistently demonstrated exceptional technical skills in front-end development, with a keen eye for detail and a deep understanding of modern web technologies. He was highly dedicated, eager to learn, and contributed significantly to our projects. I am confident he will bring the same level of professionalism, commitment, and expertise to any team he joins.",
    },
    {
        name: "Ali Khaled",
        role: "Front-end Engineer",
        company: "Sustainable Star",
        text: "It was an absolute privilege to work with Baraa. His exceptional skills as a developer, combined with his dedication to delivering high-quality work, made every project a success. Baraa solves complex problems efficiently and his collaborative spirit makes him an asset to any team. I have no doubt he will achieve great things.",
    },
    {
        name: "Mohammed Abu Harb",
        role: "Digital Product Designer",
        company: "Sustainable Star",
        text: "I’m thrilled to recommend Baraa, an incredibly skilled developer I’ve had the pleasure of working with. His technical abilities are top-notch and his passion for development is clear in every project. Baraa brings a positive attitude and strong problem-solving skills, delivering high-quality work every time.",
    },
];

export default function Recommendations() {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-6"
        >
            <SectionTitle>recommendations.</SectionTitle>

            <div className="flex flex-col gap-8">
                {RECOMMENDATIONS.map((rec, index) => (
                    <div key={index} className="flex flex-col gap-4 relative group px-1">
                        <div className="absolute left-[-14px] sm:left-[-20px] top-0 bottom-0 w-[2px] bg-border/40 group-hover:bg-primary/60 transition-colors" />

                        <div className="flex flex-col gap-1">
                            <h3 className="text-[1rem] font-bold text-foreground">
                                {rec.name}
                            </h3>
                            <p className="text-[0.82rem] text-muted-foreground uppercase tracking-wider font-medium">
                                {rec.role} <span className="text-muted-foreground/30 mx-1">•</span> {rec.company}
                            </p>
                        </div>

                        <p className="text-[0.92rem] text-muted-foreground leading-[1.6] italic">
                            &quot;{rec.text}&quot;
                        </p>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
