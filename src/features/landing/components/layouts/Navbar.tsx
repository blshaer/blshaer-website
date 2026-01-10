"use client";

import Logo from "@/features/landing/components/layouts/Logo";
import ToggleMode from "@/features/theme/components/ToggleMode";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const styles = {
  link: "text-[var(--headline)] hover:text-[var(--headline)] flex gap-[5px] rounded-md text-sm font-medium items-center py-2 relative",
  activeIndicator: "",
};

const iconAnimationVariants = {
  initial: { scale: 1 },
  animate: { scale: [1, 0.9, 1], transition: { duration: 0.2 } },
};

const mobileMenuVariants = {
  closed: {
    opacity: "0%",
    x: 0,
    transition: { duration: 0.2 },
  },
  open: {
    opacity: "100%",
    x: 0,
    transition: { duration: 0.4 },
  },
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const path = usePathname();

  const ispath =
    path.startsWith("/auth") ||
    path.startsWith("/dashboard") ||
    path.startsWith("/admin");

  const navItems = [
    { label: "Work", href: "/#work" },
    { label: "Projects", href: "/#projects" },
    { label: "Post", href: "/posts" },
    { label: "Say Hi", href: "/contact" },
  ];

  return (
    <>
      {!ispath && (
        <motion.nav
          dir="ltr"
          id="navbar"
          transition={{ duration: 0.5 }}
          className="container  mb-8 max-md:bg-[var(--background)] max-md:z-40 mx-auto z-40 flex items-center justify-between gap-5 rounded-full border border-[var(--border)] max-md:border-t-0 max-md:border-x-0 bg-[var(--mobile-nav)] px-5 text-base backdrop-blur-lg max-md:fixed max-md:left-0 max-md:right-0 max-md:top-0 max-md:w-full max-md:rounded-none max-md:px-3 sm:px-6 md:mt-4 shadow-sm"
        >
          <div className="container mx-auto px-0">
            <div className="flex h-16 items-center justify-between max-md:flex-wrap">
              <Link
                href="/"
                className="flex-shrink-0 hover:opacity-80 transition-opacity"
              >
                <Logo />
              </Link>

              <div className="hidden h-full items-center justify-center md:flex">
                <div
                  dir="ltr"
                  className="flex h-full items-center justify-center gap-4"
                >
                  {navItems.map((item) => (
                    <motion.div
                      className="relative flex h-full items-center justify-center max-md:hidden"
                      key={item.href}
                    >
                      <Link
                        href={item.href}
                        className={`${styles.link} transition-opacity duration-200 ease-in-out hover:opacity-70`}
                      >
                        <span>{item.label}</span>
                      </Link>
                      {path === item.href && (
                        <motion.div
                          className={styles.activeIndicator}
                          layoutId="activeIndicator"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex items-center max-md:flex-wrap gap-3 max-md:gap-2 justify-center md:hidden">
                <ToggleMode />
                <motion.button
                  className="text-[var(--headline)] p-2 rounded-full hover:bg-[var(--card-background)] transition-colors"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="flex items-center justify-center"
                    variants={iconAnimationVariants}
                    initial="initial"
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                </motion.button>
              </div>

              <div className="hidden md:flex items-center gap-3">
                <ToggleMode />
              </div>

              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    className="fixed z-50 inset-0 m-0 flex h-[100vh] w-full flex-col items-center justify-center bg-[var(--background)]"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={mobileMenuVariants}
                  >
                    <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4">
                      <Link
                        href="/"
                        className="flex-shrink-0"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Logo />
                      </Link>
                      <motion.button
                        className="p-2 rounded-full hover:bg-[var(--card-background)] transition-colors text-[var(--headline)]"
                        onClick={() => setIsMobileMenuOpen(false)}
                        whileTap={{ scale: 0.95 }}
                      >
                        <X className="h-5 w-5" />
                      </motion.button>
                    </div>

                    <div className="flex flex-col items-center space-y-6 w-full px-8">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="w-full"
                        >
                          <Link
                            href={item.href}
                            className="flex items-center justify-center gap-3 py-3 px-4 rounded-[12px] hover:bg-[var(--card-background)] transition-colors text-[var(--headline)] text-xl font-bold"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.nav>
      )}
    </>
  );
}
