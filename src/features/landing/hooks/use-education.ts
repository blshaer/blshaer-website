"use client";

import { educationData, type Education } from "@/shared/data";
import { useCallback, useEffect, useState } from "react";

interface UseEducationOptions {
  current?: boolean;
  limit?: number;
}

interface UseEducationReturn {
  education: Education[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useEducation(
  options: UseEducationOptions = {},
): UseEducationReturn {
  const [education, setEducation] = useState<Education[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEducation = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Simulate loading delay for better UX
      await new Promise((resolve) => setTimeout(resolve, 300));

      let filteredData = [...educationData];

      // Apply filters
      if (options.current !== undefined) {
        filteredData = filteredData.filter(
          (edu) => edu.current === options.current,
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

      setEducation(filteredData);
    } catch (err) {
      console.error("Error loading education:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
      setEducation([]);
    } finally {
      setLoading(false);
    }
  }, [options.current, options.limit]);

  useEffect(() => {
    fetchEducation();
  }, [fetchEducation]);

  return {
    education,
    loading,
    error,
    refetch: fetchEducation,
  };
}

// Helper hook for current education only
export function useCurrentEducation(): UseEducationReturn {
  return useEducation({ current: true, limit: 1 });
}

// Helper hook for all education with limit
export function useEducationWithLimit(limit: number): UseEducationReturn {
  return useEducation({ limit });
}
