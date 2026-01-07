"use client";

import { Badge } from "@/shared/ui/badge";
import { Skeleton } from "@/shared/ui/skeleton";
import { motion } from "framer-motion";
import { FileWarning, Github, Globe, RepeatIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../../../shared/ui/button";
import { Card, CardContent, CardFooter } from "../../../shared/ui/card";
import ReusableCard from "../../../shared/ui/ReusableCard";
import { RandomizedTextEffect } from "../../../shared/ui/text-randomized";

export default function PostsPreview() {
  const direction = "en";

  const styles = {
    breadcrumbLink: "hover:text-[var(--paragraph)] hoverd",
    arrowIcon:
      "text-[var(--paragraph)] text-3xl hoverd hover:text-[var(--link-color)] cursor-pointer ml-[-16px] max-md:ml-[-8px]",
    linkStyle:
      "flex items-center justify-center gap-1 text-sm text-[var(--headline)] opacity-70 hoverd hover:opacity-100",
  };

  const isValidLink = (link: string | undefined) => {
    return link && link.trim() !== "" && link !== "#";
  };

  const [posts, setPosts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [flag, setflag] = useState(false);

  React.useEffect(() => {
    const fetchPosts = async () => {
      const startTime = Date.now();
      const minLoadingTime = 1500; // Minimum 1.5 seconds for skeleton

      try {
        const response = await fetch(
          "https://dev.to/api/articles?username=baraa",
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setflag(true);
      } finally {
        // Ensure minimum loading time
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

        setTimeout(() => {
          setLoading(false);
        }, remainingTime);
      }
    };

    fetchPosts();
  }, []);

  const reload = () => { };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      dir={direction}
      className="posts  flex min-h-[100vh] w-full flex-col gap-5 max-md:pb-0 max-md:pt-[0px]"
    >
      <div className="flex relative w-full min-h-[50vh] flex-col items-center justify-center gap-8 ">
        {loading
          ? Array(3)
            .fill(null)
            .map((_, index) => (
              <motion.div
                key={index}
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-[var(--card-background)] border-[var(--card-border-color)] border rounded-[10px] p-6 space-y-4">
                  {/* Cover image skeleton */}
                  <Skeleton className="w-full h-48 rounded-[8px]" />

                  {/* Title skeleton */}
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>

                  {/* Description skeleton */}
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>

                  {/* Tags skeleton */}
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-6 w-20 rounded-full" />
                    <Skeleton className="h-6 w-14 rounded-full" />
                  </div>

                  {/* Links skeleton */}
                  <div className="flex gap-4 pt-2">
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-8 w-20" />
                  </div>
                </div>
              </motion.div>
            ))
          : // Show posts once data is fetched
          posts.map((post: any) => (
            <ReusableCard
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
              skills={Array.isArray(post.tags) ? post.tags : []}
              websiteLink={post.url}
              githubLink={post.github_url}
              linkStyle={styles.linkStyle}
              className="pb-4 pt-2"
              dir={direction}
              coverImg={
                post.cover_image ||
                "https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&fit=max"
              } // Passing image URL as 'img' prop
            >
              <div className="flex max-w-[60%] flex-wrap gap-2 max-md:mb-0 max-md:mt-4 max-md:max-w-full">
                {Array.isArray(post.tags) && post.tags.length > 0 ? (
                  post.tags.map((tag: string, tagIndex: number) => (
                    <Badge key={tagIndex}>{tag}</Badge>
                  ))
                ) : (
                  <span>No tags available</span>
                )}
              </div>

              <div className="flex flex-wrap gap-4 max-md:mt-5">
                {isValidLink(post.url) && (
                  <Link
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkStyle}
                  >
                    <span>
                      <Globe className="h-4 w-4" />
                    </span>
                    <span>Visit Website</span>
                  </Link>
                )}

                {isValidLink(post.github_url) && (
                  <Link
                    href={post.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkStyle}
                  >
                    <span>
                      <Github className="h-4 w-4" />
                    </span>
                    <span>Visit Github</span>
                  </Link>
                )}
              </div>
            </ReusableCard>
          ))}

        {flag && (
          <Card className="flex   h-max absolute inset-0 m-auto text-[var(--paragraph)] w-full  rounded-[10px] p-3 justify-center items-center flex-col gap-3">
            <CardContent>
              <div className="error flex items-center justify-center gap-1">
                <FileWarning />
                <RandomizedTextEffect
                  className=" text-[var(--paragraph)]"
                  text={"Faield to get posts"}
                />
              </div>
            </CardContent>

            <CardFooter>
              <Button className="gap-0" onClick={reload} icon={<RepeatIcon />}>
                Try again
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </motion.div>
  );
}
