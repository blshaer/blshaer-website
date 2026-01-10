"use client";

import { cn } from "@/shared/lib/utils";
import { motion } from "framer-motion";

interface SectionDividerProps {
  className?: string;
  withText?: boolean;
  text?: string;
  icon?: React.ReactNode;
}

export function SectionDivider({
  className,
  withText = false,
  text = "Section",
  icon,
}: SectionDividerProps) {
  return (
    <div className={cn("relative flex items-center py-8", className)}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: withText ? "30%" : "100%" }}
        transition={{ duration: 0.5 }}
        className="h-px bg-gradient-to-r from-transparent via-[var(--card-border-color)] to-transparent"
      />

      {withText && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-4 flex items-center gap-2 whitespace-nowrap text-sm font-medium text-[var(--paragraph)]"
        >
          {icon && <span>{icon}</span>}
          <span>{text}</span>
        </motion.div>
      )}

      {withText && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "30%" }}
          transition={{ duration: 0.5 }}
          className="h-px bg-gradient-to-r from-[var(--card-border-color)] via-[var(--card-border-color)] to-transparent"
        />
      )}
    </div>
  );
}
