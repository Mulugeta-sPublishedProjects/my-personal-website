"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { FaReact, FaDatabase, FaMobileAlt, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiNx,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiMantine,
  SiVite,
  SiVerizon,
  SiVercel,
  SiTurborepo,
} from "react-icons/si";
import { DiJavascript1, DiCss3, DiHtml5 } from "react-icons/di";
import { GrDeploy } from "react-icons/gr";
import { BsDiagram3 } from "react-icons/bs";

const skillsData = [
  { name: "JavaScript", icon: <DiJavascript1 />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
  { name: "HTML", icon: <DiHtml5 />, color: "#E34F26" },
  { name: "CSS", icon: <DiCss3 />, color: "#1572B6" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Material-UI (MUI)", icon: <SiMui />, color: "#007FFF" },
  { name: "Mantine UI", icon: <SiMantine />, color: "#339AF0" },
  { name: "React Flow", icon: <BsDiagram3 />, color: "#61DAFB" },
  { name: "Form.io", icon: <SiVerizon />, color: "#E30000" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
  { name: "NestJS", icon: <SiNestjs />, color: "#E0234E" },
  { name: "Monorepo (Nx)", icon: <SiNx />, color: "#143055" },
  { name: "TurboRepo", icon: <SiTurborepo />, color: "#000000" },
  { name: "Postgres", icon: <FaDatabase />, color: "#336791" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "Vite", icon: <SiVite />, color: "#646CFF" },
  { name: "Deployment to Vercel", icon: <SiVercel />, color: "#000000" },
  { name: "Deployments", icon: <GrDeploy />, color: "#666666" },
  { name: "React Native", icon: <FaMobileAlt />, color: "#61DAFB" },
];

export default function SkillsPage() {
  return (
    <div className="py-8 max-w-screen-2xl mx-auto">
      <h2 className="text-3xl font-bold dark:text-white mb-8 text-center">
        Skills & Tools
      </h2>
      <div className="relative overflow-hidden dark:from-gray-800 dark:to-gray-900 rounded-lg p-4">
        {/* Grid layout for small screens */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:hidden max-w-5xl mx-auto">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col gap-2 items-center p-3 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700 transition-transform duration-300 cursor-pointer bg-gray-800 bg-opacity-10"
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

        {/* Marquee for medium and larger screens */}
        <div className="hidden md:block">
          <Marquee gradient={false} speed={50} pauseOnHover>
            <div className="flex items-center space-x-12">
              {skillsData.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer bg-gray-800 bg-opacity-10"
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
