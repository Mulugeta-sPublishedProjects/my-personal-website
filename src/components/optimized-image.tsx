import Image, { ImageProps } from "next/image";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import {
  getBlurDataURL,
  getImageDimensions,
  getResponsiveSizes,
} from "@/lib/image-utils";

type OptimizedImageProps = Omit<ImageProps, "src" | "width" | "height"> & {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  maxWidth?: number;
  showSkeleton?: boolean;
  onLoadingComplete?: () => void;
  containerClassName?: string;
};

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 85,
  sizes: customSizes,
  maxWidth = 1920,
  showSkeleton = true,
  onLoadingComplete,
  containerClassName,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const { dimensions, blurDataURL, sizes } = useMemo(() => {
    const dims = getImageDimensions(width, height, maxWidth);
    return {
      dimensions: dims,
      blurDataURL: getBlurDataURL(width, height),
      sizes: customSizes || dims.sizes,
    };
  }, [width, height, maxWidth, customSizes]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoadingComplete?.();
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  // Don't render anything if there's an error and no fallback
  if (hasError && !props.onError) {
    return null;
  }

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {showSkeleton && isLoading && (
        <div
          className="absolute inset-0 bg-muted/20 animate-pulse rounded-md"
          aria-hidden="true"
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={dimensions.width}
        height={dimensions.height}
        sizes={sizes}
        priority={priority}
        quality={quality}
        className={cn(
          "transition-opacity duration-300 object-cover",
          isLoading ? "opacity-0" : "opacity-100",
          className,
        )}
        placeholder={!hasError ? "blur" : "empty"}
        blurDataURL={!hasError ? blurDataURL : undefined}
        onLoadingComplete={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
}

// Version for remote images without blur placeholders
export function RemoteOptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  sizes: customSizes,
  ...props
}: Omit<OptimizedImageProps, "placeholder" | "blurDataURL">) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const { dimensions, sizes } = useMemo(
    () => ({
      dimensions: getImageDimensions(width, height),
      sizes: customSizes || getResponsiveSizes(),
    }),
    [width, height, customSizes],
  );

  const handleLoad = () => {
    setIsLoading(false);
    props.onLoadingComplete?.();
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setHasError(true);
    setIsLoading(false);
    props.onError?.(e);
  };

  if (hasError && !props.onError) {
    return null;
  }

  return (
    <div className={cn("relative overflow-hidden", props.containerClassName)}>
      {isLoading && (
        <div
          className="absolute inset-0 bg-muted/20 animate-pulse rounded-md"
          aria-hidden="true"
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={dimensions.width}
        height={dimensions.height}
        sizes={sizes}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className,
        )}
        onLoadingComplete={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
}
