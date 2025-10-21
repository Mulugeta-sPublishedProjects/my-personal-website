"use client";

import { useState, useEffect } from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type OptimizedImageProps = Omit<ImageProps, "onLoadingComplete"> & {
  fallbackSource?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function OptimizedImage({
  src,
  alt,
  className = "",
  fallbackSource: fallbackSourceProperty = "/placeholder.jpg",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  ...props
}: OptimizedImageProps) {
  const [imgSource, setImgSource] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setImgSource(src);
    setIsLoading(true);
  }, [src]);

  const handleError = () => {
    if (imgSource !== fallbackSourceProperty) {
      setImgSource(fallbackSourceProperty);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={cn("relative", className)}>
      {isLoading && (
        <div className="absolute inset-0 bg-muted/20 animate-pulse rounded-md" />
      )}
      <Image
        {...props}
        src={imgSource}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        onLoadingComplete={handleLoad}
        onError={handleError}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        quality={75}
        sizes={sizes}
      />
    </div>
  );
}
