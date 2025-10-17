"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const TelegramIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>(({ className, ...props }, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 240"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M120 0C53.7 0 0 53.7 0 120s53.7 120 120 120 120-53.7 120-120S186.3 0 120 0zm58.6 85.2l-17.2 81.3c-1.3 5.7-4.7 7.1-9.5 4.4l-26.3-19.4-12.7 12.2c-1.4 1.4-2.6 2.6-5.3 2.6l1.9-27.1 49.4-44.6c2.2-2-0.5-3.1-3.4-1.1l-61 38.4-26.3-8.2c-5.7-1.8-5.8-5.7 1.2-8.4l102.8-39.6c4.8-1.8 9 1.1 7.5 8.5z" />
    </svg>
  );
});

TelegramIcon.displayName = "TelegramIcon";

export { TelegramIcon };
