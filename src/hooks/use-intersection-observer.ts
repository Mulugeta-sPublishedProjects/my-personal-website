import { RefObject, useEffect, useState } from 'react';

type IntersectionOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
  enabled?: boolean;
};

export function useIntersectionObserver(
  ref: RefObject<Element>,
  options: IntersectionOptions = {}
): boolean {
  const {
    root = null,
    rootMargin = '0px',
    threshold = 0.1,
    triggerOnce = true,
    enabled = true,
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || !enabled) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setIsIntersecting(isVisible);

        if (isVisible && triggerOnce) {
          observer.unobserve(element);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, root, rootMargin, threshold, triggerOnce, enabled]);

  return isIntersecting;
}
