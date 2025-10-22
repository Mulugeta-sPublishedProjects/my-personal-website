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
  quality = 70, // Reduced default quality
  lcp = false,
  preload = false,
  ...props
}: OptimizedImageProps) => {
  const isCritical = lcp || priority || preload;

  // Remove the custom loading state logic that was causing issues
  // Let Next.js Image component handle loading natively

  return (
    <div className={wrapperClassName}>
      <Image
        src={src}
        alt={alt}
        fill
        quality={isCritical ? 80 : quality}
        priority={isCritical}
        className={`object-cover ${className}`}
        sizes={
          isCritical
            ? "100vw"
            : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        }
        loading={isCritical ? "eager" : "lazy"}
        fetchPriority={isCritical ? "high" : undefined}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
