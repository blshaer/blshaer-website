"use client";

import { experiencesData, type Experience } from "@/shared/data";
import { useCallback, useEffect, useState } from "react";

interface UseExperiencesOptions {
  current?: boolean;
  limit?: number;
}

interface UseExperiencesReturn {
  experiences: Experience[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useExperiences(
  options: UseExperiencesOptions = {},
): UseExperiencesReturn {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchExperiences = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Simulate loading delay for better UX
      await new Promise((resolve) => setTimeout(resolve, 300));

      let filteredData = [...experiencesData];

      // Apply filters
      if (options.current !== undefined) {
        filteredData = filteredData.filter(
          (exp) => exp.current === options.current,
        );
      }

      // Apply limit
      if (options.limit) {
        filteredData = filteredData.slice(0, options.limit);
      }

      // Sort by start date (newest first)
      filteredData.sort(
        (a, b) =>
          new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
      );

      setExperiences(filteredData);
    } catch (err) {
      console.error("Error loading experiences:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
      setExperiences([]);
    } finally {
      setLoading(false);
    }
  }, [options.current, options.limit]);

  useEffect(() => {
    fetchExperiences();
  }, [fetchExperiences]);

  return {
    experiences,
    loading,
    error,
    refetch: fetchExperiences,
  };
}

// Helper hook for current experience only
export function useCurrentExperience(): UseExperiencesReturn {
  return useExperiences({ current: true, limit: 1 });
}

// Helper hook for all experiences with limit
export function useExperiencesWithLimit(limit: number): UseExperiencesReturn {
  return useExperiences({ limit });
}
