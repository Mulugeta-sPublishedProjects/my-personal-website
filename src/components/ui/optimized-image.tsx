"use client";

import Image, { type ImageProps } from "next/image";
import { useState, useEffect } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: string;
  alt: string;
  className?: string;          // applies to <Image />
  wrapperClassName?: string;   // applies to wrapper <div />
  priority?: boolean;
  quality?: number;
}

const OptimizedImage = ({
  src,
  alt,
  className = "",
  wrapperClassName = "relative w-full h-full", // default ensures height
  priority = false,
  quality = 75,
  ...props
}: OptimizedImageProps) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new window.Image();
    img.src = src;

    img.onload = () => setIsLoading(false);
    img.onerror = () => {
      setImageSrc("/images/fallback.webp");
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div className={wrapperClassName}>
      <Image
        src={imageSrc}
        alt={alt}
        fill
        quality={quality}
        priority={priority}
        className={`object-cover transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"} ${className}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...props}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded-lg" />
      )}
    </div>
  );
};

export default OptimizedImage;
