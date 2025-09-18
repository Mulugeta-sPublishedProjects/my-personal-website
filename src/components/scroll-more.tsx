import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Enhanced TypeScript interface with better defaults and additional options
interface ScrollMoreButtonProps {
  onClick: () => void;
  label?: string;
  className?: string;
  variant?: "default" | "minimal" | "enhanced";
  ariaLabel?: string;
  position?: "bottom" | "top";
  delay?: number;
}

// Animation variants for consistent animations
const fadeInUpVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: {
    delay: 1,
    duration: 0.6,
    ease: "easeOut",
  },
};

const bounceVariants = {
  animate: {
    y: [0, 6, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const enhancedBounceVariants = {
  animate: {
    y: [0, 8, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const pulseVariants = {
  animate: {
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Main component with variant selection
export function ScrollMoreButton({
  onClick,
  label = "More",
  className,
  variant = "default",
  ariaLabel,
  position = "bottom",
  delay = 1,
}: ScrollMoreButtonProps) {
  // Generate aria label if not provided
  const generatedAriaLabel = ariaLabel || `Scroll for ${label.toLowerCase()}`;

  // Position class based on prop
  const positionClass = position === "bottom" ? "bottom-6" : "top-6";

  // Custom transition with delay prop
  const customTransition = {
    ...fadeInUpVariants.transition,
    delay,
  };

  switch (variant) {
    case "minimal":
      return (
        <ScrollMoreButtonMinimal
          onClick={onClick}
          className={className}
          ariaLabel={generatedAriaLabel}
          position={position}
          delay={delay + 0.2} // Slightly longer delay for minimal version
        />
      );
    case "enhanced":
      return (
        <ScrollMoreButtonEnhanced
          onClick={onClick}
          label={label}
          className={className}
          ariaLabel={generatedAriaLabel}
          position={position}
          delay={delay}
        />
      );
    default:
      return (
        <motion.div
          initial={fadeInUpVariants.initial}
          animate={fadeInUpVariants.animate}
          transition={customTransition}
          className={cn(
            "absolute left-1/2 -translate-x-1/2 z-10",
            positionClass,
            className,
          )}
        >
          <Button
            onClick={onClick}
            aria-label={generatedAriaLabel}
            variant="outline"
            size="sm"
            className={cn(
              "rounded-full bg-background/80 backdrop-blur-sm border-border/50 shadow-sm hover:bg-accent/20 hover:text-foreground transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary/50",
              "group",
            )}
          >
            <motion.span
              variants={bounceVariants}
              animate="animate"
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors"
            >
              <ArrowDown
                className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
                aria-hidden="true"
              />
              <span>{label}</span>
            </motion.span>
          </Button>
        </motion.div>
      );
  }
}

// Enhanced version with better visual feedback
function ScrollMoreButtonEnhanced({
  onClick,
  label = "Explore more",
  className,
  ariaLabel,
  position = "bottom",
  delay = 1,
}: ScrollMoreButtonProps) {
  // Position class based on prop
  const positionClass = position === "bottom" ? "bottom-6" : "top-6";

  // Custom transition with delay prop
  const customTransition = {
    ...fadeInUpVariants.transition,
    delay,
  };

  return (
    <motion.div
      initial={fadeInUpVariants.initial}
      animate={fadeInUpVariants.animate}
      transition={customTransition}
      className={cn(
        "absolute left-1/2 -translate-x-1/2 z-10",
        positionClass,
        className,
      )}
    >
      <Button
        onClick={onClick}
        aria-label={ariaLabel}
        variant="ghost"
        size="sm"
        className={cn(
          "rounded-full bg-background/60 backdrop-blur-md border-0 shadow-none hover:bg-background/80 transition-all duration-300 group",
          "focus:outline-none focus:ring-2 focus:ring-primary/50",
        )}
      >
        <motion.div
          className="flex flex-col items-center gap-1"
          variants={enhancedBounceVariants}
          animate="animate"
        >
          <ArrowDown
            className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors"
            aria-hidden="true"
          />
          <motion.span
            className="text-xs uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors"
            variants={pulseVariants}
            animate="animate"
          >
            {label}
          </motion.span>
        </motion.div>
      </Button>
    </motion.div>
  );
}

// Minimal version for cleaner design
function ScrollMoreButtonMinimal({
  onClick,
  className,
  ariaLabel,
  position = "bottom",
  delay = 1.2,
}: ScrollMoreButtonProps) {
  // Position class based on prop
  const positionClass = position === "bottom" ? "bottom-8" : "top-8";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay,
        duration: 0.5,
      }}
      className={cn(
        "absolute left-1/2 -translate-x-1/2 z-10",
        positionClass,
        className,
      )}
    >
      <Button
        onClick={onClick}
        aria-label={ariaLabel || "Scroll for more"}
        variant="ghost"
        size="icon"
        className={cn(
          "rounded-full h-10 w-10 bg-background/40 backdrop-blur-sm border-0 shadow-none hover:bg-background/60 transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-primary/50",
        )}
      >
        <motion.div variants={bounceVariants} animate="animate">
          <ArrowDown
            className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors"
            aria-hidden="true"
          />
        </motion.div>
      </Button>
    </motion.div>
  );
}
