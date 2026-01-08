"use client";

import { useSocialLinks } from "@/features/landing/hooks/use-social-links";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as HiIcons from "react-icons/hi";
import * as IoIcons from "react-icons/io5";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as TiIcons from "react-icons/ti";

const iconLibraries = {
  fa: FaIcons,
  ai: AiIcons,
  bi: BiIcons,
  bs: BsIcons,
  fi: FiIcons,
  hi: HiIcons,
  io: IoIcons,
  md: MdIcons,
  ri: RiIcons,
  si: SiIcons,
  ti: TiIcons,
};

export interface SocialMediaLink {
  title: string;
  link: string;
  icon: any;
}

const LinksSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { socialLinks, loading, error } = useSocialLinks(true);

  const handleLinkHover = (index: number | null) => {
    setHoveredIndex(index);
  };

  // Get icon component
  const getIconComponent = (iconName: string, library: string) => {
    const iconLib = iconLibraries[library as keyof typeof iconLibraries];
    if (!iconLib) return null;

    const IconComponent = iconLib[iconName as keyof typeof iconLib];
    if (!IconComponent) return null;

    const Icon = IconComponent as React.ComponentType<{
      size?: number;
      className?: string;
    }>;
    return <Icon size={20} className="text-[var(--link-color)]" />;
  };

  const styles = {
    socialLink:
      "flex contact-title capitalize text-[1rem] items-center hoverd gap-2 max-md:flex max-md:flex-row h-[100%] w-full transition-all duration-300",
    socialLinkHover:
      "flex contact-title capitalize text-[1rem] items-center hoverd gap-2 max-md:flex max-md:flex-row h-[100%] w-full opacity-40 transition-all duration-300",
    icon: "h-5 w-5 text-[var(--link-color)]",
  };

  if (loading) {
    return (
      <div className="mt-8">
        <h3 className="text-lg font-medium text-[var(--headline)] mb-4">
          Connect with me
        </h3>
        <div className="flex items-start gap-6 py-[8px]">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-[40px] w-[120px] bg-gray-200 rounded-[12px] animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  if (error || socialLinks.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h3 className="text-lg font-medium text-[var(--headline)] mb-4">
        Connect with me
      </h3>
      <ul
        className={
          "flex items-start gap-6 py-[8px] text-[1rem] text-[var(--paragraph)] max-md:w-full max-md:flex-col"
        }
      >
        {socialLinks.map((item, index) => (
          <li
            className={
              "rounded-[12px]2px] max-md:w-full max-md:bg-[var(--card-background)] max-md:px-[8px] max-md:py-[14px]"
            }
            key={item._id}
          >
            <Link
              className={` ${hoveredIndex !== null && index !== hoveredIndex
                  ? styles.socialLinkHover
                  : styles.socialLink
                }`}
              target="_blank"
              rel="noopener noreferrer"
              href={item.url}
              onMouseEnter={() => handleLinkHover(index)}
              onMouseLeave={() => handleLinkHover(null)}
            >
              <span className="hidden h-full items-center justify-center max-md:flex">
                <ExternalLink />
              </span>
              <span className="flex h-full items-center justify-center gap-2 text-[var(--headline)] opacity-80 hover:opacity-100">
                <span className="max-md:hidden">
                  {getIconComponent(item.icon, item.iconLibrary)}
                </span>
                <span className="animated-underline">{item.platform}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksSection;
