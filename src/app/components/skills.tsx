"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const skillsData = [
  {
    name: "JavaScript",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#F7DF1E"
        viewBox="0 0 24 24"
        className="w-8 h-8"
      >
        <rect width="24" height="24" rx="4" />
        <path
          d="M9.8 16.8c-.9-.5-1.7-1.2-1.8-2.6h1.9c0 .7.4 1.2.9 1.6.7.4 1.5.6 2.3.6s1.5-.2 1.5-.8-.5-.9-1.8-1.2c-1.9-.4-4.4-.8-4.4-3.3 0-1.6 1.3-3.2 3.7-3.2s3.5 1 4 1.6c.3.5.4 1 .4 1.7H16c0-1.1-.7-2-2.3-2-1.4 0-2 .6-2 1.4 0 .5.4.9 1.8 1.2 2 .4 4.4.9 4.4 3.2 0 2.5-2.2 3.4-4.1 3.4-1.9-.1-3.2-.7-3.8-1.2zm4.3 3.8H9v-1.5h5v1.5z"
          fill="#000"
        />
      </svg>
    ),
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#3178C6"
        viewBox="0 0 24 24"
        className="w-8 h-8"
      >
        <rect width="24" height="24" rx="4" />
        <text
          x="6"
          y="18"
          fill="#FFF"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="10"
          fontWeight="bold"
        >
          TS
        </text>
      </svg>
    ),
    color: "#3178C6",
  },
  {
    name: "React",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="w-8 h-8"
      >
        <circle cx="12" cy="12" r="4.5" fill="#61DAFB" />
        <ellipse
          cx="12"
          cy="12"
          rx="11"
          ry="4.5"
          transform="rotate(60 12 12)"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="2"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="11"
          ry="4.5"
          transform="rotate(-60 12 12)"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="2"
        />
      </svg>
    ),
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#000"
        viewBox="0 0 24 24"
        className="w-8 h-8"
      >
        <rect width="24" height="24" rx="4" fill="#000" />
        <path d="M6 6h12v12H6V6z" fill="#FFF" />
        <path d="M9 9h6v6H9V9z" fill="#000" />
      </svg>
    ),
    color: "#000000",
  },
  {
    name: "Redux",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#764ABC"
        viewBox="0 0 24 24"
        className="w-8 h-8"
      >
        <circle cx="12" cy="12" r="10" fill="#764ABC" />
        <text
          x="6"
          y="18"
          fill="#FFF"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="10"
          fontWeight="bold"
        >
          Redux
        </text>
      </svg>
    ),
    color: "#764ABC",
  },
  {
    name: "HTML",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#E34F26"
        viewBox="0 0 24 24"
        className="w-8 h-8"
      >
        <polygon points="12 2 3 22 21 22 12 2" fill="#E34F26" />
        <polygon points="12 17.3 7.8 7.8 16.2 7.8 12 17.3" fill="#FFF" />
      </svg>
    ),
    color: "#E34F26",
  },
  {
    name: "CSS",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#1572B6"
        viewBox="0 0 24 24"
        className="w-8 h-8"
      >
        <polygon points="12 2 3 22 21 22 12 2" fill="#1572B6" />
        <polygon points="12 17.3 7.8 7.8 16.2 7.8 12 17.3" fill="#FFF" />
      </svg>
    ),
    color: "#1572B6",
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#06B6D4"
        viewBox="0 0 24 24"
        className="w-8 h-8"
      >
        <path d="M12 4c-2 0-3.5 1.5-4 4 1-2 2-3 4-3 2 0 3 1 4 3-1-2-2-3-4-3zm0 8c-2 0-3.5 1.5-4 4 1-2 2-3 4-3 2 0 3 1 4 3-1-2-2-3-4-3z" />
      </svg>
    ),
    color: "#06B6D4",
  },
  {
    name: "React Native",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="w-8 h-8"
      >
        <circle cx="12" cy="12" r="4.5" fill="#61DAFB" />
        <ellipse
          cx="12"
          cy="12"
          rx="11"
          ry="4.5"
          transform="rotate(60 12 12)"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="2"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="11"
          ry="4.5"
          transform="rotate(-60 12 12)"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="2"
        />
      </svg>
    ),
    color: "#61DAFB",
  },
  {
    name: "Git",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#F05032"
        viewBox="0 0 24 24"
        className="w-8 h-8"
      >
        <circle cx="12" cy="12" r="10" fill="#F05032" />
        <path d="M12 10v4M10 12h4" fill="#FFF" />
      </svg>
    ),
    color: "#F05032",
  },
  {
    name: "Deployment to Vercel",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#000"
        viewBox="0 0 24 24"
        className="w-8 h-8"
      >
        <polygon points="12 2 2 22 22 22 12 2" fill="#000" />
      </svg>
    ),
    color: "#000000",
  },
];

export default function SkillsPage() {
  return (
    <div className="py-8 max-w-(--breakpoint-2xl) mx-auto">
      <h2 className="text-3xl font-bold dark:text-white mb-8 text-center">
        Skills & Tools
      </h2>
      <div className="relative overflow-hidden dark:from-gray-800 dark:to-gray-900 rounded-lg p-4">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:hidden max-w-5xl mx-auto">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col gap-2 items-center p-3 rounded-lg shadow-lg hover:scale-105
               hover:bg-gray-100 dark:hover:bg-gray-700 transition-transform duration-300 cursor-pointer
                "
              aria-label={`Skill: ${skill.name}`}
            >
              <div
                className="text-3xl sm:text-4xl"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <Marquee gradient={false} speed={50} pauseOnHover>
            <div className="flex items-center space-x-12">
              {skillsData.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center p-4 rounded-lg shadow-lg hover:scale-105
                   transition-transform duration-300 cursor-pointer bg-gray-300"
                  aria-label={`Skill: ${skill.name}`}
                  style={{ minWidth: "120px" }}
                >
                  <div
                    className="text-4xl sm:text-5xl"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <p className="mt-2 text-sm sm:text-md font-semibold text-center">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
