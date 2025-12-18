"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

// Professional transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4,
};

// Slide transition for sidebar navigation
const slideVariants = {
  initial: {
    opacity: 0,
    x: -30,
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: 30,
  },
};

const slideTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.3,
};

// Fade transition for subtle changes
const fadeVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const fadeTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.2,
};

export function PageTransition({
  children,
  className = "",
}: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function SlideTransition({
  children,
  className = "",
}: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={slideVariants}
        transition={slideTransition}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function FadeTransition({
  children,
  className = "",
}: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={fadeVariants}
        transition={fadeTransition}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Staggered children animation for lists and grids
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.3,
    },
  },
};

// Loading transition
export const loadingVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.2,
    },
  },
};

// Modal/Dialog transitions
export const modalVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    y: 50,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.2,
    },
  },
};

export const backdropVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

// Card hover animations
export const cardHoverVariants = {
  initial: {
    scale: 1,
    y: 0,
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  hover: {
    scale: 1.02,
    y: -5,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

// Button press animation
export const buttonPressVariants = {
  initial: {
    scale: 1,
  },
  tap: {
    scale: 0.95,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17,
    },
  },
};

// Navigation link active state
export const navLinkVariants = {
  initial: {
    backgroundColor: "transparent",
    color: "var(--paragraph)",
  },
  active: {
    backgroundColor: "var(--link-color)",
    color: "white",
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.2,
    },
  },
  hover: {
    backgroundColor: "var(--card-background-effect)",
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.15,
    },
  },
};

// Notification/Toast animations
export const toastVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.3,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.5,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0.2,
    },
  },
};

// Sidebar collapse/expand animation
export const sidebarVariants = {
  expanded: {
    width: "280px",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  collapsed: {
    width: "80px",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

// Form field focus animation
export const fieldFocusVariants = {
  initial: {
    borderColor: "var(--input-border-color)",
    boxShadow: "none",
  },
  focus: {
    borderColor: "var(--link-color)",
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.15,
    },
  },
};

// Success/Error state animations
export const statusVariants = {
  success: {
    borderColor: "#10b981",
    backgroundColor: "#f0fdf4",
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.3,
    },
  },
  error: {
    borderColor: "#ef4444",
    backgroundColor: "#fef2f2",
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.3,
    },
  },
  initial: {
    borderColor: "var(--input-border-color)",
    backgroundColor: "var(--input-background)",
  },
};
