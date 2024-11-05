"use client";
import React, { useState } from "react";
import ProjectCard from "../shared/project-card";

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
    image: "/path-to-image1.jpg",
    liveLink: "https://liveproject1.com",
    githubLink: "https://github.com/username/project1",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of Project Two.",
    techStack: ["Vue", "Firebase"],
    image: "/path-to-image2.jpg",
    liveLink: "https://liveproject2.com",
    githubLink: "https://github.com/username/project2",
    category: "Mobile Development",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of Project Three.",
    techStack: ["React Native", "Redux"],
    image: "/path-to-image3.jpg",
    liveLink: "https://liveproject3.com",
    githubLink: "https://github.com/username/project3",
    category: "Mobile Development",
  },
  {
    id: 4,
    title: "Project Four",
    description: "A brief description of Project Four.",
    techStack: ["Python", "Flask", "SQLAlchemy"],
    image: "/path-to-image4.jpg",
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

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="p-6  mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
        My Projects
      </h1>

      {/* Category Tabs */}
      <div className="flex justify-center mb-10 space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
    </div>
  );
};
