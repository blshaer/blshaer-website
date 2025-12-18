"use client";

import { projectTypesData, type ProjectType } from "@/shared/data";
import { useCallback, useEffect, useState } from "react";

interface UseProjectTypesOptions {
  active?: boolean;
}

interface UseProjectTypesReturn {
  projectTypes: ProjectType[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  createProjectType: (data: Partial<ProjectType>) => Promise<ProjectType>;
  updateProjectType: (
    id: string,
    data: Partial<ProjectType>,
  ) => Promise<ProjectType>;
  deleteProjectType: (id: string) => Promise<void>;
}

export function useProjectTypes(
  options: UseProjectTypesOptions = {},
): UseProjectTypesReturn {
  const [projectTypes, setProjectTypes] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjectTypes = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Simulate loading delay for better UX
      await new Promise((resolve) => setTimeout(resolve, 300));

      let filteredData = [...projectTypesData];

      // Apply filters
      if (options.active !== undefined) {
        filteredData = filteredData.filter(
          (type) => type.isActive === options.active,
        );
      }

      // Sort by creation date
      filteredData.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );

      setProjectTypes(filteredData);
    } catch (err) {
      console.error("Error loading project types:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
      setProjectTypes([]);
    } finally {
      setLoading(false);
    }
  }, [options.active]);

  const createProjectType = useCallback(
    async (data: Partial<ProjectType>): Promise<ProjectType> => {
      // In a static app, we can't actually create project types
      // This is just for compatibility with existing code
      console.warn("Project type creation is not supported in static mode");
      throw new Error("Project type creation is not supported in static mode");
    },
    [],
  );

  const updateProjectType = useCallback(
    async (id: string, data: Partial<ProjectType>): Promise<ProjectType> => {
      // In a static app, we can't actually update project types
      // This is just for compatibility with existing code
      console.warn("Project type updates are not supported in static mode");
      throw new Error("Project type updates are not supported in static mode");
    },
    [],
  );

  const deleteProjectType = useCallback(async (id: string): Promise<void> => {
    // In a static app, we can't actually delete project types
    // This is just for compatibility with existing code
    console.warn("Project type deletion is not supported in static mode");
    throw new Error("Project type deletion is not supported in static mode");
  }, []);

  useEffect(() => {
    fetchProjectTypes();
  }, [fetchProjectTypes]);

  return {
    projectTypes,
    loading,
    error,
    refetch: fetchProjectTypes,
    createProjectType,
    updateProjectType,
    deleteProjectType,
  };
}

// Helper hook for active project types only
export function useActiveProjectTypes(): UseProjectTypesReturn {
  return useProjectTypes({ active: true });
}
