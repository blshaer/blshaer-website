import { useEffect, useState } from "react";
import { fetchPosts } from "../api/posts.api";

export const usePosts = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const load = async () => {
      const start = Date.now();
      const minDelay = 1500;

      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch {
        setError(true);
      } finally {
        const elapsed = Date.now() - start;
        setTimeout(
          () => setLoading(false),
          Math.max(0, minDelay - elapsed)
        );
      }
    };

    load();
  }, []);

  return { posts, loading, error };
};
