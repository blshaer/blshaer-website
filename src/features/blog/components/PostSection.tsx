"use client";

import { usePosts } from "../hooks/usePosts";
import { PostSkeleton } from "./PostSkeleton";
import { PostPreviewItem } from "./PostPreviewItem";
import { PostError } from "./PostError";
import Link from "next/link";
import { Button } from "@/shared/ui";

export default function PostSection() {
  const { posts, loading, error } = usePosts();
  const preview = posts.slice(0, 3);

  return (
    <section>
      <div className="flex flex-col gap-3">
        {loading &&
          Array.from({ length: 3 }).map((_, i) => (
            <PostSkeleton key={i} />
          ))}

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
