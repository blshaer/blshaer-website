"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/shared/ui";
import { PostError } from "./PostError";
import { PostPreviewItem } from "./PostPreviewItem";
import { PostSkeleton } from "./PostSkeleton";

type DevToPost = {
  id: number;
  title: string;
  description?: string;
  url: string;
  readable_publish_date?: string;
  published_at?: string;
  cover_image?: string | null;
  tag_list?: string[] | string;
};

export const fetchPosts = async (): Promise<DevToPost[]> => {
  const response = await fetch("https://dev.to/api/articles?username=baraa");

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

export const usePosts = () => {
  const [posts, setPosts] = useState<DevToPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      const start = Date.now();
      const minDelay = 1500;

      try {
        const data = await fetchPosts();
        if (mounted) setPosts(data);
      } catch {
        if (mounted) setError(true);
      } finally {
        const elapsed = Date.now() - start;
        const remaining = Math.max(0, minDelay - elapsed);

        setTimeout(() => {
          if (mounted) setLoading(false);
        }, remaining);
      }
    };

    load();

    return () => {
      mounted = false;
    };
  }, []);

  return { posts, loading, error };
};

export default function PostSection() {
  const { posts, loading, error } = usePosts();
  const preview = posts.slice(0, 3);

  return (
    <section>
      <div className="flex flex-col gap-3">
        {loading &&
          Array.from({ length: 3 }).map((_, i) => <PostSkeleton key={i} />)}

        {!loading &&
          !error &&
          preview.map((post) => (
            <PostPreviewItem key={post.id} post={post} />
          ))}

        {!loading && error && <PostError />}

        <Link href="/posts">
          <Button>View All Posts</Button>
        </Link>
      </div>
    </section>
  );
}
