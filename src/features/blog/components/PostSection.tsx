"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../../../shared/ui";

export default function PostSection() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorFlag, setErrorFlag] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const startTime = Date.now();
      const minLoadingTime = 1500;
      try {
        const response = await fetch(
          "https://dev.to/api/articles?username=baraa",
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
        setErrorFlag(true);
      } finally {
        const elapsed = Date.now() - startTime;
        setTimeout(
          () => setLoading(false),
          Math.max(0, minLoadingTime - elapsed),
        );
      }
    };
    fetchPosts();
  }, []);

  const previewPosts = posts.slice(0, 3);

  return (
    <section className="" style={{ backgroundColor: "var(--background)" }}>
      <div className="w-full">
        <div
          className="text-left mb-6 sm:mb-8  pt-6"
          style={{ borderColor: "var(--border)" }}
        >
          <p
            className="text-sm sm:text-base"
            style={{ color: "var(--paragraph)" }}
          >
            Here are some{" "}
            <span className="font-medium" style={{ color: "var(--headline)" }}>
              blogs
            </span>{" "}
            I've written
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:gap-3">
          {loading && (
            <>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="group border rounded-lg px-4 py-3 sm:px-6 sm:py-4 flex items-center gap-3 sm:gap-4 w-full animate-pulse"
                  style={{
                    borderColor: "var(--card-border-color)",
                    backgroundColor: "var(--card-background)",
                    minWidth: 0,
                    height: 48,
                  }}
                />
              ))}
            </>
          )}

          {!loading &&
            !errorFlag &&
            previewPosts.length > 0 &&
            previewPosts.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border rounded-lg px-4 py-3 sm:px-6 sm:py-4 flex items-center gap-3 sm:gap-4 w-full transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.01] cursor-pointer transform-gpu no-underline focus:outline-none focus:ring-2"
                style={{
                  borderColor: "var(--card-border-color)",
                  backgroundColor: "var(--card-background)",
                  minWidth: 0,
                  transitionProperty:
                    "background-color, border-color, transform",
                  transitionDuration: "300ms",
                  transitionTimingFunction: "ease",
                }}
                aria-label={`Read blog: ${post.title}`}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--card-hover)";
                  e.currentTarget.style.borderColor = "var(--button-border)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--card-background)";
                  e.currentTarget.style.borderColor =
                    "var(--card-border-color)";
                }}
                onFocus={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 0 2px var(--button)`;
                }}
                onBlur={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span
                      className="font-figtree text-sm sm:text-base truncate"
                      style={{ color: "var(--headline)" }}
                    >
                      {post.title}
                    </span>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-external-link sm:w-[18px] sm:h-[18px] transition-colors"
                  aria-hidden="true"
                  style={{ color: "var(--paragraph)" }}
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </a>
            ))}

          {!loading && errorFlag && (
            <p className="text-center py-4" style={{ color: "var(--button)" }}>
              Failed to load posts.
            </p>
          )}

          <Link href="/posts">
            <Button className="flex-row-reverse mt-4" icon={<ArrowRight />}>
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
