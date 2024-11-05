import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveLink: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  image,
  liveLink,
  githubLink,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <Image src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center space-x-4 mt-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 transition duration-200 flex items-center"
          >
            <FaExternalLinkAlt className="mr-2" /> Live Project
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400 transition duration-200 flex items-center"
          >
            <FaGithub className="mr-2" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
