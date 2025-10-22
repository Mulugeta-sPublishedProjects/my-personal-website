"use client";

import Image, { type ImageProps } from "next/image";
import { useState, useEffect } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  priority?: boolean;
  quality?: number;
  lcp?: boolean;
  preload?: boolean;
}

const OptimizedImage = ({
  src,
  alt,
  className = "",
  wrapperClassName = "relative w-full h-full",
  priority = false,
  quality = 75,
  lcp = false,
  preload = false,
  ...props
}: OptimizedImageProps) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  const isCritical = lcp || priority || preload;

  // Simplified loading logic to reduce JavaScript overhead
  useEffect(() => {
    if (!isCritical) {
      // Simple loading without complex fallback logic
      const img = new window.Image();
      img.src = src;
      img.onload = () => setIsLoading(false);
      img.onerror = () => setIsLoading(false); // Just hide loading state on error
    } else {
      // Critical images don't need loading states
      setIsLoading(false);
    }
  }, [src, isCritical]);

  return (
    <div className={wrapperClassName}>
      <Image
        src={imageSrc}
        alt={alt}
        fill
        quality={isCritical ? 85 : quality}
        priority={isCritical}
        className={`object-cover transition-opacity duration-300 ease-in-out ${
          isLoading && !isCritical ? "opacity-0" : "opacity-100"
        } ${className}`}
        sizes={
          isCritical
            ? "100vw"
            : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        }
        loading={isCritical ? "eager" : "lazy"}
        fetchPriority={isCritical ? "high" : undefined}
        {...props}
      />
      {isLoading && !isCritical && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded-lg" />
      )}
    </div>
  );
};

export default OptimizedImage;
