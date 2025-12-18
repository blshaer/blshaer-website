import { contentData, type Content } from "@/shared/data";
import { useEffect, useState } from "react";

export function useContent(section: string) {
  const [content, setContent] = useState<Content | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContent = async () => {
    try {
      setLoading(true);
      setError(null);

      // Simulate loading delay for better UX
      await new Promise((resolve) => setTimeout(resolve, 300));

      const foundContent = contentData.find(
        (item) => item.section === section && item.isActive,
      );
      setContent(foundContent || null);
    } catch (err) {
      console.error(`Error loading ${section} content:`, err);
      setError(err instanceof Error ? err.message : "Failed to load content");
      setContent(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, [section]);

  return { content, loading, error, refetch: fetchContent };
}
