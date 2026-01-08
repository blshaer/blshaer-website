"use client";

import { useEffect, useState } from "react";

import {
  socialLinksData,
  type SocialLink as SocialLinkData,
} from "@/features/landing/utils/SocialLinks";

export type SocialLink = SocialLinkData;

interface UseSocialLinksReturn {
  socialLinks: SocialLink[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useSocialLinks(
  activeOnly: boolean = true,
): UseSocialLinksReturn {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSocialLinks = async () => {
    try {
      setLoading(true);
      setError(null);

      const links = (
        activeOnly
          ? socialLinksData.filter((link) => link.isActive)
          : socialLinksData
      )
        .slice()
        .sort((a, b) => a.order - b.order);

      setSocialLinks(links);
    } catch {
      setError("Failed to load social links");
      setSocialLinks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSocialLinks();
  }, [activeOnly]);

  return {
    socialLinks,
    loading,
    error,
    refetch: fetchSocialLinks,
  };
}
