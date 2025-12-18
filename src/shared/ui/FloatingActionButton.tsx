"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, FileText, Home, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface FloatingActionButtonProps {
  threshold?: number;
}

export default function FloatingActionButton({
  threshold = 300,
}: FloatingActionButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        if (isMenuOpen) setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, isMenuOpen]);

  const menuItems = [
    { icon: <Home className="h-5 w-5" />, label: "Home", href: "/" },
    { icon: <Briefcase className="h-5 w-5" />, label: "Work", href: "/#work" },
    {
      icon: <FileText className="h-5 w-5" />,
      label: "Projects",
      href: "/projects",
    },
    { icon: <Mail className="h-5 w-5" />, label: "Contact", href: "/contact" },
  ];

  const handleMenuItemClick = (href: string) => {
    setIsMenuOpen(false);
    if (href === "/#work") {
      const workSection = document.getElementById("work");
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-30 flex flex-col items-end hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {/* Menu items */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="mb-4 flex flex-col gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => handleMenuItemClick(item.href)}
                      className="flex items-center gap-2 rounded-full bg-[var(--card-background)] px-4 py-2 text-sm text-[var(--headline)] shadow-md hover:bg-[var(--link-color)] hover:text-white transition-colors"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main button */}
          <motion.button
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--link-color)] text-white shadow-lg hover:bg-[var(--button)] transition-colors"
            onClick={() =>
              isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
            }
            whileTap={{ scale: 0.9 }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </motion.button>

          {/* Back to top button */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
