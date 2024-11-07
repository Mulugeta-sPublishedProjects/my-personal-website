"use client";
import React from "react";

export const Splash = () => {
  return (
    <div className="h-[50vh] w-full flex items-center justify-center mt-[20%] relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
        style={{
          shapeRendering: "auto",
          display: "block",
        }}
      >
        {/* Defining Gradients */}
        <defs>
          <linearGradient
            id="outerGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FF5D87" />
            <stop offset="100%" stopColor="#8c28af" />
          </linearGradient>
          <linearGradient
            id="innerGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#3b55a3" />
            <stop offset="100%" stopColor="#145baf" />
          </linearGradient>
        </defs>

        <g>
          <circle
            strokeLinecap="round"
            fill="none"
            strokeDasharray="50.26548245743669 50.26548245743669"
            stroke="url(#outerGradient)"
            strokeWidth="8"
            r="32"
            cy="50"
            cx="50"
          >
            <animateTransform
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              repeatCount="indefinite"
              dur="1s"
              type="rotate"
              attributeName="transform"
            />
          </circle>

          <circle
            strokeLinecap="round"
            fill="none"
            strokeDashoffset="36.12831551628262"
            strokeDasharray="36.12831551628262 36.12831551628262"
            stroke="url(#innerGradient)"
            strokeWidth="8"
            r="23"
            cy="50"
            cx="50"
          >
            <animateTransform
              values="0 50 50;-360 50 50"
              keyTimes="0;1"
              repeatCount="indefinite"
              dur="1s"
              type="rotate"
              attributeName="transform"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
};
