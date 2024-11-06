// components/ResponsiveImage.tsx
import React, { CSSProperties } from "react";
import Image from "next/image";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  layout?: "fill" | "responsive" | "intrinsic" | "fixed";
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  sizes?: string;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
  aspectRatio?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  layout = "responsive",
  objectFit = "cover",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className,
  style,
  priority = false,
  aspectRatio = "1 / 1", // Default to square aspect ratio
}) => {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        ...style,
        position: "relative",
        aspectRatio,
      }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit={objectFit}
        sizes={sizes}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default ResponsiveImage;
