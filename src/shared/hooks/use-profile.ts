"use client";

import { profileData, type Profile } from "@/shared/data";
import { useCallback, useEffect, useState } from "react";

interface UseProfileReturn {
  profile: Profile | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  updateProfile: (data: Partial<Profile>) => Promise<Profile>;
}

export function useProfile(): UseProfileReturn {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Simulate loading delay for better UX
      await new Promise((resolve) => setTimeout(resolve, 300));

      setProfile(profileData);
    } catch (err) {
      console.error("Error loading profile:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
      setProfile(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateProfile = useCallback(
    async (data: Partial<Profile>): Promise<Profile> => {
      // In a static app, we can't actually update the profile
      // This is just for compatibility with existing code
      console.warn("Profile updates are not supported in static mode");
      return profileData;
    },
    [],
  );

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return {
    profile,
    loading,
    error,
    refetch: fetchProfile,
    updateProfile,
  };
}
