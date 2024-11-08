"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ProjectCard from "../shared/project-card";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveLink: string;
  githubLink: string;
  category: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of Project One.",
    techStack: ["React", "Node.js", "MongoDB"],
    image: "/portifolio-website.jpg",
    liveLink: "https://liveproject1.com",
    githubLink: "https://github.com/username/project1",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of Project Two.",
    techStack: ["Vue", "Firebase"],
    image: "/image.png",
    liveLink: "https://liveproject2.com",
    githubLink: "https://github.com/username/project2",
    category: "Mobile Development",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of Project Three.",
    techStack: ["React Native", "Redux"],
    image: "/image.png",
    liveLink: "https://liveproject3.com",
    githubLink: "https://github.com/username/project3",
    category: "Mobile Development",
  },
  {
    id: 4,
    title: "Project Four",
    description: "A brief description of Project Four.",
    techStack: ["Python", "Flask", "SQLAlchemy"],
    image: "/image.png",
    liveLink: "https://liveproject4.com",
    githubLink: "https://github.com/username/project4",
    category: "Data Science",
  },
];

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Data Science",
];

export const PortfolioProjects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const router = useRouter();

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  const handleShowMoreClick = () => {
    router.push("https://github.com/muleA");
  };

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
            />
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMoreClick}
            className="px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold transition hover:bg-primary-600"
          >
            Show More
          </button>
        </div>
      </div>
    </motion.div>
  );
};
