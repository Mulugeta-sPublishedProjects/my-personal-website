import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

type AnimationDirection = "up" | "down" | "left" | "right" | "fade";

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  direction?: AnimationDirection;
};

const directionTransformMap: Record<AnimationDirection, string> = {
  up: "translateY(20px)",
  down: "translateY(-20px)",
  left: "translateX(20px)",
  right: "translateX(-20px)",
  fade: "none",
};

export function FadeInSection({
  children,
  className,
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
  delay = 0,
  direction = "up",
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, {
    threshold,
    rootMargin,
    triggerOnce,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out will-change-[opacity,transform]",
        className,
      )}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : directionTransformMap[direction],
        transitionDelay: `${delay}ms`,
      }}
      aria-hidden={!isVisible}
    >
      {children}
    </div>
  );
}
