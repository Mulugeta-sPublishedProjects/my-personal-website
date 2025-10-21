"use client";

import Image, { type ImageProps } from "next/image";
import { useState, useEffect } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: string;
  alt: string;
  className?: string; // applies to <Image />
  wrapperClassName?: string; // applies to wrapper <div />
  priority?: boolean;
  quality?: number;
  lcp?: boolean; // Special flag for Largest Contentful Paint images
  preload?: boolean; // Preload the image
}

const OptimizedImage = ({
  src,
  alt,
  className = "",
  wrapperClassName = "relative w-full h-full", // default ensures height
  priority = false,
  quality = 75,
  lcp = false, // Default to false
  preload = false,
  ...props
}: OptimizedImageProps) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  // For LCP or priority images, we want to ensure they load as quickly as possible
  const isCritical = lcp || priority || preload;

  useEffect(() => {
    // Only apply custom loading for non-critical images
    if (!isCritical) {
      const img = new window.Image();
      img.src = src;

      img.onload = () => setIsLoading(false);
      img.onerror = () => {
        // Try fallback image if primary fails
        const fallbackSrc = src.replace(
          /\.(avif|webp)$/,
          src.endsWith(".avif") ? ".webp" : ".avif"
        );
        setImageSrc(fallbackSrc);
        setIsLoading(false);
      };
    } else {
      // For critical images (like hero), don't show custom loading state
      setIsLoading(false);
    }
  }, [src, isCritical]);

  return (
    <div className={wrapperClassName}>
      <Image
        src={imageSrc}
        alt={alt}
        fill
        quality={isCritical ? 85 : quality} // Use 85 to match our configured qualities
        priority={isCritical}
        className={`object-cover ${isCritical ? "" : "transition-opacity duration-300"} ${isLoading && !isCritical ? "opacity-0" : "opacity-100"} ${className}`}
        sizes={
          isCritical
            ? "100vw"
            : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        }
        loading={isCritical ? "eager" : "lazy"}
        fetchPriority={isCritical ? "high" : undefined}
        onError={() => {
          // Try fallback image if primary fails
          const fallbackSrc = imageSrc.replace(
            /\.(avif|webp)$/,
            imageSrc.endsWith(".avif") ? ".webp" : ".avif"
          );
          if (fallbackSrc !== imageSrc) {
            setImageSrc(fallbackSrc);
          }
        }}
        {...props}
      />
      {isLoading && !isCritical && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded-lg" />
      )}
    </div>
  );
};

export default OptimizedImage;
