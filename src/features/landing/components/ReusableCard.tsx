"use client";

import { cn } from "@/shared/lib/utils";
import { Badge } from "@/shared/ui/badge";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import Link from "next/link";
import * as React from "react";
import Folder from "../../../shared/ui/Folder";
import { MagicCard } from "../../../shared/ui/MagicCard";

interface Paper {
  title: string;
  link: string;
}

interface ReusableCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  title?: string;
  date?: string;
  description?: string;
  skills?: string[];
  websiteLink?: string;
  githubLink?: string;
  t?: (key: string) => string;
  linkStyle?: string;
  img?: string;
  coverImg?: string;
  suptitle?: string;
  papers?: Paper[];
}

const ReusableCard = React.forwardRef<HTMLDivElement, ReusableCardProps>(
  (
    {
      id,
      title,
      date,
      description,
      skills = [],
      websiteLink,
      githubLink,
      t = (key: string) => key,
      linkStyle = "",
      img,
      coverImg,
      suptitle,
      className,
      papers = [], // ✅ روابط الورق
      ...props
    },
    ref
  ) => {
    return (
      <MagicCard
        gradientColor="#7e7e7e12"
        ref={ref}
        className={cn(
          "group overflow-hidden transition-all duration-300",
          "border-[var(--card-border-color)] bg-[var(--card-background)]",
          className
        )}
        {...props}
      >
        {coverImg && (
          <div className="relative w-full h-52 overflow-hidden rounded-t-md">
            <div
              className="absolute inset-0 bg-cover bg-center blur-[100px]"
              style={{ backgroundImage: `url(${coverImg})` }}
            ></div>
            <img
              src={coverImg}
              alt={title ? `${title} - Cover Image` : "Cover Image"}
              className="w-full h-full object-contain z-50 transition-transform duration-300 rounded-[12px] scale-105"
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/400x225?text=Loading...";
              }}
            />
          </div>
        )}

        <CardHeader className="p-4 flex flex-col items-start justify-between space-y-3">
          <div className="flex flex-col space-y-2">
            {title && (
              <CardTitle className="text-lg font-semibold">
                <Link
                  href={websiteLink || githubLink || "#"}
                  className="text-[var(--card-headline)] transition-colors hover:text-[var(--link-hover)] flex items-center"
                >
                  <span>{title}</span>
                </Link>
              </CardTitle>
            )}
            {suptitle && (
              <CardDescription className="text-sm text-[var(--card-paragraph)]">
                {suptitle}
              </CardDescription>
            )}
          </div>

          {date && (
            <CardDescription className="flex items-center justify-between text-sm text-[var(--card-paragraph)]">
              <span>{date}</span>
              {img && (
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img
                    src={img}
                    alt={title ? `${title} - Profile Image` : "Profile Image"}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/100?text=Profile";
                    }}
                  />
                </div>
              )}
            </CardDescription>
          )}
        </CardHeader>

        {description && (
          <CardContent className="p-4">
            <p className="text-sm text-[var(--card-paragraph)]">
              {description}
            </p>
          </CardContent>
        )}

        <CardFooter className="p-4 flex flex-col gap-4 sm:flex-row items-start sm:items-center justify-between">
          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-[var(--badge-background)] text-xs text-[var(--badge-text)]"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          )}

          {papers.length > 0 && (
            <div className="flex flex-col items-center space-y-1">
              <Folder items={papers} size={0.8} color="#7f5af0" />
            </div>
          )}
        </CardFooter>
      </MagicCard>
    );
  }
);

ReusableCard.displayName = "ReusableCard";

export default ReusableCard;
