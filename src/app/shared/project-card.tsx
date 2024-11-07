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
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 flex-grow max-w-xs sm:max-w-sm lg:max-w-md mx-4 my-4">
      <div className="relative w-full h-48 sm:h-64 md:h-80 overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
          priority
          style={{
            filter: "grayscale(100%)",
          }}
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mb-3 sm:mb-4">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1 sm:mb-2 text-sm sm:text-base">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-xs sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center space-x-3 sm:space-x-4 mt-3 sm:mt-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 hover:text-primary-700 dark:hover:text-primary-300 transition duration-200 flex items-center text-sm sm:text-base"
          >
            <FaExternalLinkAlt className="mr-1 sm:mr-2" /> Live Project
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400 transition duration-200 flex items-center text-sm sm:text-base"
          >
            <FaGithub className="mr-1 sm:mr-2" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
