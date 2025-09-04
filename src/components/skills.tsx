"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const skillsData = [
  {
    name: "JavaScript",
    color: "text-[#F7DF1E]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12"
      >
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path
          d="M9.8 16.8c-.9-.5-1.7-1.2-1.8-2.6h1.9c0 .7.4 1.2.9 1.6.7.4 1.5.6 2.3.6s1.5-.2 1.5-.8-.5-.9-1.8-1.2c-1.9-.4-4.4-.8-4.4-3.3 0-1.6 1.3-3.2 3.7-3.2s3.5 1 4 1.6c.3.5.4 1 .4 1.7H16c0-1.1-.7-2-2.3-2-1.4 0-2 .6-2 1.4 0 .5.4.9 1.8 1.2 2 .4 4.4.9 4.4 3.2 0 2.5-2.2 3.4-4.1 3.4-1.9-.1-3.2-.7-3.8-1.2zm4.3 3.8H9v-1.5h5v1.5z"
          fill="#000"
        />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    color: "text-[#3178C6]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12"
      >
        <rect width="24" height="24" rx="4" fill="#3178C6" />
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
  },
  {
    name: "React",
    color: "text-[#61DAFB]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12"
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
  },
  {
    name: "Next.js",
    color: "text-black dark:text-white",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12"
      >
        <rect width="24" height="24" rx="4" fill="#000" />
        <path d="M6 6h12v12H6V6z" fill="#FFF" />
        <path d="M9 9h6v6H9V9z" fill="#000" />
      </svg>
    ),
  },
  {
    name: "Redux",
    color: "text-[#764ABC]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12"
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
  },
  {
    name: "HTML",
    color: "text-[#E34F26]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12"
      >
        <polygon points="12 2 3 22 21 22 12 2" fill="#E34F26" />
        <polygon points="12 17.3 7.8 7.8 16.2 7.8 12 17.3" fill="#FFF" />
      </svg>
    ),
  },
  {
    name: "CSS",
    color: "text-[#1572B6]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12"
      >
        <polygon points="12 2 3 22 21 22 12 2" fill="#1572B6" />
        <polygon points="12 17.3 7.8 7.8 16.2 7.8 12 17.3" fill="#FFF" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    color: "text-[#06B6D4]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12"
      >
        <path
          d="M12 4c-2 0-3.5 1.5-4 4 1-2 2-3 4-3 2 0 3 1 4 3-1-2-2-3-4-3zm0 8c-2 0-3.5 1.5-4 4 1-2 2-3 4-3 2 0 3 1 4 3-1-2-2-3-4-3z"
          fill="#06B6D4"
        />
      </svg>
    ),
  },
  {
    name: "React Native",
    color: "text-[#61DAFB]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12"
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
  },
  {
    name: "Git",
    color: "text-[#F05032]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12"
      >
        <circle cx="12" cy="12" r="10" fill="#F05032" />
        <path d="M12 10v4M10 12h4" stroke="#FFF" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    color: "text-black dark:text-white",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12"
      >
        <polygon
          points="12 2 2 22 22 22 12 2"
          fill="#000"
          className="dark:fill-white"
        />
      </svg>
    ),
  },
];

export default function SkillsPage() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-background to-muted/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px]" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Skills & Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I specialize in and use to create amazing digital
            experiences
          </p>
        </div>

        {/* Mobile Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden gap-6 max-w-5xl mx-auto">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-card border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              aria-label={`Skill: ${skill.name}`}
            >
              <div
                className={`text-5xl ${skill.color} transition-transform duration-300 group-hover:scale-110`}
              >
                {skill.icon}
              </div>
              <p className="text-base font-semibold text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop Marquee */}
        <div className="hidden md:block">
          <div className="relative overflow-hidden py-8">
            <Marquee gradient={false} speed={40} pauseOnHover className="py-4">
              <div className="flex items-center space-x-12">
                {skillsData.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group min-w-[140px]"
                    aria-label={`Skill: ${skill.name}`}
                  >
                    <div
                      className={`text-5xl ${skill.color} transition-transform duration-300 group-hover:scale-110`}
                    >
                      {skill.icon}
                    </div>
                    <p className="mt-3 text-base font-semibold text-center">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
