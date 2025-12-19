"use client";

import { useFeaturedRecommendations } from "@/shared/hooks/use-recommendations";
import { ScrollEffect } from "@/shared/lib/animations";
import { cn } from "@/shared/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { MagicCard } from "@/shared/ui/MagicCard";
import { Skeleton } from "@/shared/ui/skeleton";
import Link from "next/link";

import { GoLinkExternal } from "react-icons/go";

const getInitials = (name: string) => {
  const parts = name.trim().split(" ");
  return (
    parts[0]?.[0].toUpperCase() +
    (parts.length > 1 ? parts[parts.length - 1][0].toUpperCase() : "")
  );
};

const RecommendationsSection = () => {
  const { recommendations, loading, error } = useFeaturedRecommendations();

  if (loading) {
    return (
      <section className="w-full py-10">
        <ScrollEffect type="fadeIn">
          <header className="mb-8">
            <h1
              className="font-doto font-bold text-2xl leading-8 pt-2"
              style={{ color: "var(--headline)", borderColor: "var(--border)" }}
              data-ninja-font="doto_bold_normal_rg90b"
            >
              Recommendations{" "}
              <span
                className="font-jetbrains-mono text-sm"
                style={{ color: "var(--secondary)" }}
              >
                From <Link href="link">LinkedIn</Link>
              </span>
            </h1>
            <p
              className="font-figtree text-sm mt-2 mb-4"
              style={{ color: "var(--paragraph)" }}
            >
              Here are some recommendations from people I've worked with.
            </p>
          </header>
          <div className="flex flex-col items-center gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-full rounded-xl pt-16 flex flex-col">
                <div className="flex items-start gap-4">
                  <Skeleton className="h-10 w-10 rounded-full flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-3 w-3/4" />
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-[95%]" />
                  <Skeleton className="h-4 w-[88%]" />
                  <Skeleton className="h-4 w-[92%]" />
                  <Skeleton className="h-4 w-[75%]" />
                </div>
              </div>
            ))}
          </div>
        </ScrollEffect>
      </section>
    );
  }

  return (
    <section className="w-full py-10">
      <ScrollEffect type="fadeIn">
        <header className="mb-8">
          <h1
            className="section-title flex items-end gap-1"
            style={{ color: "var(--headline)", borderColor: "var(--border)" }}
            data-ninja-font="doto_bold_normal_rg90b"
          >
            <span>Recommendations</span>
            <span
              className="font-jetbrains-mono pb-[3px] text-sm flex items-center gap-1"
              style={{ color: "var(--secondary)" }}
            >
              <Link
                href="link"
                className="hoverd hover:text-[var(--headline)] flex items-center gap-1 max-md:hidden"
              >
                From LinkedIn <GoLinkExternal className="mb-0.5" />
              </Link>
            </span>
          </h1>
        </header>
      </ScrollEffect>
      <div className="flex flex-col items-center gap-6">
        {recommendations.map(
          ({ _id, avatar, name, position, company, text }) => (
            <ScrollEffect key={_id} className="w-full" type="fadeUp">
              <MagicCard
                gradientColor="#7e7e7e12"
                className={cn("flex w-full p-8")}
                ref={undefined}
              >
                <div className="flex items-start gap-2">
                  <Avatar className="border border-[var(--input-border-color)]">
                    {avatar ? (
                      <AvatarImage src={avatar} alt={name} />
                    ) : (
                      <AvatarFallback className="text-[var(--headline)]">
                        {getInitials(name)}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div className="pt-1 text-start">
                    <h3 className="text-sm font-semibold text-[var(--card-headline)]">
                      {name}
                    </h3>
                    <p className="text-sm text-[var(--card-paragraph)]">
                      {position} at {company}
                    </p>
                  </div>
                </div>

                <blockquote className="mt-4 relative text-start">
                  <span className="absolute -left-2 -top-2 text-4xl text-[var(--link-color)] opacity-20">
                    &ldquo;
                  </span>
                  <p className="mt-0 line-clamp-6 text-[var(--card-paragraph)] relative z-10">
                    {text}
                  </p>
                  <span className="absolute -bottom-4 -right-2 text-4xl text-[var(--link-color)] opacity-20">
                    &rdquo;
                  </span>
                </blockquote>
              </MagicCard>
            </ScrollEffect>
          ),
        )}
      </div>
    </section>
  );
};

export default RecommendationsSection;
