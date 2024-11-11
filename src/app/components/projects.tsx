"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ProjectCard from "../shared/project-card";
import { motion } from "framer-motion";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveLink: string;
  githubLink: string;
  category: string;
  company: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "eService",
    description:
      "eService Ethiopia is a digital platform simplifying access to government services, offering efficient, transparent online applications for permits, licenses, and payments. It enhances public service delivery across Ethiopia.",
    techStack: [
      "React",
      "Next js",
      "NX",
      "Tailwind Css",
      "RTK QUERY",
      "Mantine Ui",
    ],
    image: "/projects/project1.png",
    liveLink: "http://196.189.44.47:3001/",
    githubLink: "http://196.189.44.47:3001/",
    category: "Web Development",
    company: "Perago Systems PLC",
  },
  {
    id: 2,
    title: "WUMIS",
    description:
      "WUMIS (Water Utility Management Information System) is an innovative platform developed by a consortium of Ethiopian companies to enhance the efficiency of water utilities in Ethiopia.",
    techStack: ["React JS", "Material Ui", "RTK Query", "Graphql"],
    image: "/projects/project2.png",
    liveLink: "https://wumis.et/",
    githubLink: "https://wumis.et/",
    category: "Web Development",
    company: "Top Link Technology PLC",
  },
  {
    id: 3,
    title: "Icare",
    description:
      "Access All AAFDA(Addis Ababa Food & Drug Authority) Services In One Place.",
    techStack: [
      "React Js",
      "Mantine Ui",
      "Next js",
      "Tailwind Css",
      "RTQ Query",
    ],
    image: "/projects/project31.png",
    liveLink: "http://user-portal-dev.license.aafda.gov.et/",
    githubLink: "http://user-portal-dev.license.aafda.gov.et/",
    category: "Web Development",
    company: "Tria  PLC",
  },
  {
    id: 4,
    title: "Little Lemon Restaurant ",
    description:
      "Little Lemon Restaurant Website that service its customer online order.",
    techStack: ["React JS", "Tailwind Css", "Vite"],
    image: "/projects/project4.png",
    liveLink: "https://little-lemon-git-main-mulea.vercel.app",
    githubLink: "https://github.com/username/project4",
    category: "Web Development",
    company: "Me(Personal Project)",
  },
  {
    id: 5,
    title: "Fidel Academy eLearning Website ",
    description: "Fidel Academy is E learning Website",
    techStack: ["React JS", "Tailwind Css", "Next Js", "Turbo"],
    image: "/projects/project5.png",
    liveLink: "https://fidel-academy.vercel.app/",
    githubLink: "https://fidel-academy.vercel.app/",
    category: "Web Development",
    company: "Me(Personal Project)",
  },
  {
    id: 6,
    title: "Seralance ",
    description: "Fidel Academy is E learning Website",
    techStack: ["Html", "Css", "JS", "Php", "YenePay", "Bootstrap"],
    image: "/projects/project6.png",
    liveLink:
      "https://github.com/Mulugeta-sPublishedProjects/Local-Freelance-System",
    githubLink:
      "https://github.com/Mulugeta-sPublishedProjects/Local-Freelance-System",
    category: "Web Development",
    company: "Me(Personal Project)",
  },
];

const categories = [
  "All",
  "Web Development",
  /*   "Mobile Development",
  "Data Science", */
];

export const PortfolioProjects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const router = useRouter();

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="w-full flex flex-col items-center md:items-start"
    >
      <div className="w-full  md:p-4 sm:p-6 lg:p-8 md:mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          My Projects
        </h1>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-8 space-x-2 sm:space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-2 my-2 space-x-4 sm:px-4 hover:bg-primary-500 sm:py-2 rounded-lg font-semibold transition ${
                selectedCategory === category
                  ? "bg-primary-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              image={project.image}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
              detailsLink={""}
              company={project.company}
            />
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-8">
          <Link
            target="_blank"
            className="px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold transition hover:bg-primary-600"
            href={"https://github.com/muleA"}
          >
            Show More
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
