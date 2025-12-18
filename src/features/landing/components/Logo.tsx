"use client";

import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

export default function Logo() {
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);

  async function handleHoverStart() {
    setHovered(true);
    await controls.start({
      strokeDashoffset: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    });
  }

  function handleHoverEnd() {
    setHovered(false);
    controls.set({ strokeDashoffset: 0 }); // keep stroke visible after hover ends
  }

  const pathVariants = {
    initial: { strokeDashoffset: 600, strokeWidth: 1.5 },
    hover: { strokeWidth: 5 },
  };

  return (
    <div
      className="relative cursor-pointer h-7 w-7"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <svg
        viewBox="100 60 180 260"
        xmlns="http://www.w3.org/2000/svg"
        className="relative h-full w-full"
      >
        <defs>
          <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff7e5f" />
            <stop offset="50%" stopColor="#feb47b" />
            <stop offset="100%" stopColor="#ff7e5f" />
          </linearGradient>
        </defs>

        <motion.path
          d="M211.375 151.808594C203.050781 149.433594 194.765625 155.722656 194.765625 164.390625V297.785156C194.765625 305.234375 201.695312 310.808594 208.941406 309.09375C244.675781 300.671875 271.355469 268.492188 271.355469 230.195312C271.355469 193.117188 246.363281 161.785156 211.375 151.808594ZM180.15625 144.734375V297.785156C180.15625 305.234375 173.230469 310.808594 165.980469 309.09375C130.246094 300.675781 103.566406 268.492188 103.566406 230.195312V74.296875C103.566406 68.449219 108.902344 64.046875 114.640625 65.164062C151.925781 72.410156 180.15625 105.335938 180.15625 144.734375Z"
          fill="currentColor"
          stroke="url(#gradient)"
          strokeWidth={hovered ? 5 : 1.5}
          strokeDasharray="600"
          strokeDashoffset={600}
          animate={controls}
          initial="initial"
          variants={pathVariants}
          style={{ transition: "stroke-width 0.3s ease" }}
        />
      </svg>
    </div>
  );
}
