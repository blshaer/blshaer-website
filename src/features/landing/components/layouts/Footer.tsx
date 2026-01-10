"use client";

import { useContent } from "@/features/landing/hooks/use-content";
import { scrollToTop } from "@/shared/lib/helper";
import { Button } from "@/shared/ui";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Calendar,
  Code,
  Coffee,
  Mail,
  MapPin,
  Phone,
  Star,
} from "lucide-react";
import { usePathname } from "next/navigation";

interface FooterLink {
  title: string;
  link: string;
  icon?: React.ReactNode;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const path = usePathname();
  const { content: footerContent } = useContent("footer");

  // Default content fallback
  const defaultFooterContent = {
    title: "Baraa Alshaer",
    description:
      "Full-Stack Developer specializing in creating seamless and efficient web applications.",
    content: {
      copyright: "All rights reserved.",
    },
  };

  // Use dynamic content or fallback to default
  const displayContent = footerContent || defaultFooterContent;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Enhanced footer sections
  const footerSections: FooterSection[] = [
    {
      title: "Navigation",
      links: [
        { title: "Home", link: "/" },
        { title: "About", link: "/#about" },
        { title: "Work", link: "/#work" },
        { title: "Projects", link: "/projects" },
        { title: "Contact", link: "/contact" },
      ],
    },

    {
      title: "Resources",
      links: [
        { title: "Blog", link: "/posts" },

        {
          title: "GitHub",
          link: "https://github.com/blshaer",
          external: true,
        },
        {
          title: "LinkedIn",
          link: "https://linkedin.com/in/blshaer",
          external: true,
        },
      ],
    },
  ];

  // Contact information
  const contactInfo = [
    {
      icon: <Mail className="h-4 w-4" />,
      label: "Email",
      value: "alshaercontact@gmail.com",
      link: "mailto:alshaercontact@gmail.com",
    },
    {
      icon: <Phone className="h-4 w-4" />,
      label: "Phone",
      value: "+970 59 123 4567",
      link: "tel:+970591234567",
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      label: "Location",
      value: "Palestine",
      link: "https://maps.google.com/?q=Palestine",
    },
  ];

  // Quick stats
  const quickStats = [
    {
      label: "Projects Completed",
      value: "50+",
      icon: <Code className="h-4 w-4" />,
    },
    {
      label: "Years Experience",
      value: "5+",
      icon: <Calendar className="h-4 w-4" />,
    },
    {
      label: "Happy Clients",
      value: "30+",
      icon: <Star className="h-4 w-4" />,
    },
    {
      label: "Coffee Consumed",
      value: "∞",
      icon: <Coffee className="h-4 w-4" />,
    },
  ];

  const ispath =
    path.startsWith("/auth") ||
    path.startsWith("/dashboard") ||
    path.startsWith("/admin");

  return (
    <div>
      {!ispath && (
        <footer className="w-full mt-16 z-40 bg-gradient-to-br from-[var(--card-background)] via-[var(--card-background)] to-[var(--background)] border-t border-[var(--footer-border-color)]">
          <div className="container mx-auto px-4 py-12">
            {/* Main Footer Content */}

            {/* Bottom Section */}
            <motion.div
              variants={itemVariants}
              className=" border-[var(--footer-border-color)] "
            >
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Copyright & Credits */}
                <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-[var(--paragraph)]">
                  <div className="flex items-center gap-2">
                    <span>{displayContent.content.copyright}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={scrollToTop}
                    className="text-xs group max-md:hidden"
                    aria-label="Back to top"
                  >
                    <span>Back to top</span>
                    <ArrowUp className="h-3 w-3 ml-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-500/5 to-blue-500/5 rounded-full blur-3xl" />
          </div>
        </footer>
      )}
    </div>
  );
}
