import { useState, useEffect, useCallback } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Use useCallback to memoize the handler function
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
  }, []);

  useEffect(() => {
    // Set initial value
    handleResize();

    // Use the more modern way to add event listener
    const mediaQuery = window.matchMedia(
      `(max-width: ${MOBILE_BREAKPOINT - 1}px)`,
    );

    // Add event listener
    mediaQuery.addEventListener("change", handleResize);
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return isMobile;
}
