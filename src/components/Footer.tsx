"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Expand } from "@theme-toggles/react";
import "@theme-toggles/react/css/Expand.css";
import { useSound } from "@/hooks/use-sound";
import { clickSoftSound } from "@/lib/click-soft";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    const [play] = useSound(clickSoftSound);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        play();
    };

    // useEffect only runs on the client, so now we can safely show the UI
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <footer className="flex items-center justify-between pt-10 pb-0 border-t border-border/10">
                <p className="text-[0.78rem] text-muted-foreground/60">
                    © {currentYear} Baraa Alshaer
                </p>
                <div className="w-8 h-8 rounded-full border border-border/10 bg-muted/20" />
            </footer>
        );
    }

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex items-center justify-between pt-10 pb-0 border-t border-border/10"
        >
            <p className="text-[0.78rem] text-muted-foreground/60">
                © {currentYear} Baraa Alshaer
            </p>
            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground transition-all shadow-sm overflow-hidden">
                {/* @ts-ignore - React 19 ignores pointer capture props which are required by the library types */}
                <Expand
                    duration={750}
                    toggled={theme === "dark"}
                    toggle={toggleTheme}
                    className="text-[1.2rem]"
                />
            </div>
        </motion.footer>
    );
}
