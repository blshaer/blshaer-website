"use client";

import { recommendationsData, type Recommendation } from "@/shared/data";
import { useCallback, useEffect, useState } from "react";

interface UseRecommendationsOptions {
  featured?: boolean;
  limit?: number;
}

interface UseRecommendationsReturn {
  recommendations: Recommendation[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useRecommendations(
  options: UseRecommendationsOptions = {},
): UseRecommendationsReturn {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRecommendations = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Simulate loading delay for better UX
      await new Promise((resolve) => setTimeout(resolve, 300));

      let filteredData = [...recommendationsData];

      // Apply filters
      if (options.featured !== undefined) {
        filteredData = filteredData.filter(
          (rec) => rec.featured === options.featured,
        );
      }

      // Apply limit
      if (options.limit) {
        filteredData = filteredData.slice(0, options.limit);
      }

      // Sort by date (newest first)
      filteredData.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );

      setRecommendations(filteredData);
    } catch (err) {
      console.error("Error loading recommendations:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
      setRecommendations([]);
    } finally {
      setLoading(false);
    }
  }, [options.featured, options.limit]);

  useEffect(() => {
    fetchRecommendations();
  }, [fetchRecommendations]);

  return {
    recommendations,
    loading,
    error,
    refetch: fetchRecommendations,
  };
}

// Helper hook for featured recommendations only
export function useFeaturedRecommendations(): UseRecommendationsReturn {
  return useRecommendations({ featured: true });
}

// Helper hook for recommendations with limit
export function useRecommendationsWithLimit(
  limit: number,
): UseRecommendationsReturn {
  return useRecommendations({ limit });
}
