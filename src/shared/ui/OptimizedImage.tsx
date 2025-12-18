"use client";

import { cn } from "@/shared/lib/utils";
import Image, { ImageProps } from "next/image";
import { memo, useCallback, useEffect, useState } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  fallbackSrc?: string;
  loadingClassName?: string;
  loadedClassName?: string;
  errorClassName?: string;
}

function OptimizedImage({
  src,
  alt,
  fallbackSrc = "https://via.placeholder.com/400",
  className,
  loadingClassName,
  loadedClassName,
  errorClassName,
  priority = false,
  sizes = "100vw",
  quality = 85,
  ...props
}: OptimizedImageProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  // Reset states when src changes
  useEffect(() => {
    if (src !== imgSrc && !error) {
      setLoading(true);
      setImgSrc(src);
    }
  }, [src, imgSrc, error]);

  const handleLoad = useCallback(() => {
    setLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setError(true);
    setLoading(false);
    setImgSrc(fallbackSrc);
  }, [fallbackSrc]);

  // Determine the appropriate class name based on the image state
  const imageClassName = cn(
    className,
    loading && loadingClassName,
    !loading && !error && loadedClassName,
    error && errorClassName,
  );

  return (
    <Image
      src={imgSrc}
      alt={alt || ""}
      className={imageClassName}
      onLoad={handleLoad}
      onError={handleError}
      priority={priority}
      sizes={sizes}
      quality={quality}
      {...props}
    />
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(OptimizedImage);
