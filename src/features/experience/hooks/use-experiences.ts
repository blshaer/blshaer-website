import { useCallback, useEffect, useState } from "react";
import { EXPERIENCE_DATA } from "../data/experience.data";
import { ExperienceItemType } from "../types/experience.types";

interface UseExperiencesOptions {
  current?: boolean;
  limit?: number;
}

export const useExperiences = (
  options: UseExperiencesOptions = {},
) => {
  const [experiences, setExperiences] = useState<ExperienceItemType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchExperiences = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      await new Promise((r) => setTimeout(r, 300));

      let data = [...EXPERIENCE_DATA];

      if (options.current !== undefined) {
        data = data.filter(
          (exp) => exp.isCurrentEmployer === options.current,
        );
      }

      if (options.limit) {
        data = data.slice(0, options.limit);
      }

      setExperiences(data);
    } catch (e) {
      setError("Failed to load experience");
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
};
