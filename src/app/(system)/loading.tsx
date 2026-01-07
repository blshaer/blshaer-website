"use client";

import { motion } from "framer-motion";

export default function LoadingPage() {
  const direction = "en";

  return (
    <div className="fixed inset-0 z-50 m-auto flex h-[100vh] w-[100vw] flex-col items-center justify-center overflow-hidden bg-[var(--background)] font-semibold text-[var(--headline)]">
      <div dir={direction} className="flex items-center justify-center gap-2">
        <motion.span
          className="text-[var(--headline)] font-normal"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Loading...
        </motion.span>
      </div>
    </div>
  );
}
