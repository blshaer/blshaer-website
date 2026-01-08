"use client";

import { cn } from "@/shared/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

// Omit conflicting props from HTMLMotionProps
type MotionCardProps = Omit<
  HTMLMotionProps<"div">,
  keyof React.HTMLAttributes<HTMLDivElement>
> & {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowEffect?: boolean;
  gradientBorder?: boolean;
};

export function ModernCard({
  children,
  className,
  hoverEffect = true,
  glowEffect = false,
  gradientBorder = false,
  ...props
}: MotionCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !hoverEffect) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });

    if (cardRef.current) {
      cardRef.current.style.setProperty("--mouse-x", `${x}px`);
      cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Base classes for the card
  const baseClasses =
    "relative overflow-hidden rounded-xl border border-[var(--card-border-color)] bg-[var(--card-background)] transition-all duration-300";

  // Classes for hover effect
  const hoverClasses = hoverEffect ? "hover-lift" : "";

  // Classes for glow effect
  const glowClasses = glowEffect ? "glow-on-hover" : "";

  // Combine all classes
  const cardClasses = cn(baseClasses, hoverClasses, glowClasses, className);

  // If we're using a gradient border, wrap the content
  if (gradientBorder) {
    return (
      <div className="gradient-border">
        <motion.div
          ref={cardRef}
          className={cn("gradient-border-content", className)}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          {...props}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  // Regular card
  return (
    <motion.div
      ref={cardRef}
      className={cardClasses}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {/* Glow effect on hover */}
      {hoverEffect && (
        <div
          className="absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.06), transparent 40%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}

      {/* Main content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
