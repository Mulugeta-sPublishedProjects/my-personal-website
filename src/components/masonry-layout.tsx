"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface MasonryLayoutProps {
  children: React.ReactNode[];
  columns?: number;
  gap?: number;
  className?: string;
}

export const MasonryLayout = ({
  children,
  columns = 3,
  gap = 24,
  className = "",
}: MasonryLayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [columnHeights, setColumnHeights] = useState<number[]>([]);
  const [items, setItems] = useState<
    Array<{ id: number; height: number; column: number }>
  >([]);

  // Calculate item heights and positions
  const calculateLayout = useCallback(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const itemWidth = (containerWidth - gap * (columns - 1)) / columns;
    const newColumnHeights = new Array(columns).fill(0);
    const newItems: Array<{ id: number; height: number; column: number }> = [];

    children.forEach((_, index) => {
      // Simulate different heights for variety (in real implementation, you'd measure actual heights)
      const height = 200 + Math.random() * 200; // Random height between 200-400px
      const shortestColumn = newColumnHeights.indexOf(
        Math.min(...newColumnHeights)
      );

      newItems.push({
        id: index,
        height,
        column: shortestColumn,
      });

      newColumnHeights[shortestColumn] += height + gap;
    });

    setColumnHeights(newColumnHeights);
    setItems(newItems);
  }, [children, columns, gap]);

  useEffect(() => {
    calculateLayout();

    const handleResize = () => {
      setTimeout(calculateLayout, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [calculateLayout]);

  const getItemStyle = (item: {
    id: number;
    height: number;
    column: number;
  }) => {
    const x = item.column * ((100 - gap * (columns - 1)) / columns + gap);
    const y = items
      .filter((i) => i.column === item.column && i.id < item.id)
      .reduce((sum, i) => sum + i.height + gap, 0);

    return {
      position: "absolute" as const,
      left: `${x}%`,
      top: `${y}px`,
      width: `${(100 - gap * (columns - 1)) / columns}%`,
      height: `${item.height}px`,
    };
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      style={{ height: Math.max(...columnHeights) }}
    >
      <AnimatePresence>
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            style={getItemStyle(item)}
            className="overflow-hidden"
          >
            {children[item.id]}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

// Alternative CSS Grid Masonry (more performant)
interface GridMasonryProps {
  children: React.ReactNode[];
  columns?: number;
  gap?: number;
  className?: string;
}

export const GridMasonry = ({
  children,
  columns = 3,
  gap = 24,
  className = "",
}: GridMasonryProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn("grid gap-6", className)}
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {children.map((_, index) => (
          <div
            key={index}
            className="w-full h-64 bg-muted/20 animate-pulse rounded-2xl"
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn("grid gap-6", className)}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridAutoRows: "masonry",
      }}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          className="break-inside-avoid"
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

// Responsive masonry hook
export const useResponsiveColumns = (
  breakpoints: { [key: string]: number } = {}
) => {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;

      if (width >= 1536) {
        setColumns(breakpoints.xl || 4);
      } else if (width >= 1280) {
        setColumns(breakpoints.lg || 3);
      } else if (width >= 1024) {
        setColumns(breakpoints.md || 2);
      } else if (width >= 768) {
        setColumns(breakpoints.sm || 2);
      } else {
        setColumns(breakpoints.xs || 1);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, [breakpoints]);

  return columns;
};

// Virtualized masonry for large datasets
interface VirtualMasonryProps {
  children: React.ReactNode[];
  columns?: number;
  gap?: number;
  itemHeight?: number;
  overscan?: number;
  className?: string;
}

export const VirtualMasonry = ({
  children,
  columns = 3,
  gap = 24,
  itemHeight = 300,
  overscan = 5,
  className = "",
}: VirtualMasonryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 10 });
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;

      const start = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
      const end = Math.min(
        children.length - 1,
        Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
      );

      setVisibleRange({ start, end });
      setScrollTop(scrollTop);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => container.removeEventListener("scroll", handleScroll);
  }, [children.length, itemHeight, overscan]);

  const visibleChildren = children.slice(
    visibleRange.start,
    visibleRange.end + 1
  );

  return (
    <div
      ref={containerRef}
      className={cn("overflow-auto", className)}
      style={{ height: "100vh" }}
    >
      <div
        style={{ height: children.length * itemHeight, position: "relative" }}
      >
        <div
          style={{
            position: "absolute",
            top: visibleRange.start * itemHeight,
            left: 0,
            right: 0,
          }}
        >
          <GridMasonry columns={columns} gap={gap}>
            {visibleChildren}
          </GridMasonry>
        </div>
      </div>
    </div>
  );
};
