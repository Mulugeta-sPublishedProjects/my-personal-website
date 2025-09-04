"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveLink: string;
  githubLink: string;
  detailsLink: string;
  company: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  image,
  liveLink,
  githubLink,
  detailsLink,
  company,
}) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col mx-auto sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg m-4"
    >
      {/* Image Section */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-xl"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-6 flex flex-col">
        {/* Title and Company */}
        <div className="flex justify-between items-start">
          <h3 className="text-lg sm:text-2xl font-semibold text-gray-900 dark:text-white leading-tight">
            {title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base mt-1">
            Owned by{" "}
            <span className="text-primary-500 font-medium">{company}</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-700 mt-4 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mb-3 sm:mb-4">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1 sm:mb-2 text-sm sm:text-base">
            Tech Stack
          </h4>
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-xs sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-between items-center space-x-4 mt-3 sm:mt-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 hover:text-primary-700 dark:hover:text-primary-300 transition duration-200 flex items-center text-sm sm:text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 mr-1 sm:mr-2"
            >
              <path d="M13 2h9v9h-2V5.41l-9.9 9.9-1.42-1.42 9.9-9.9H13V2zM3 5h9v2H5v12h12v-7h2v9H3V5z" />
            </svg>
            Live Project
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400 transition duration-200 flex items-center text-sm sm:text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 mr-1 sm:mr-2"
            >
              <path d="M12 2a10 10 0 00-3.16 19.47c.5.09.68-.22.68-.48v-1.71c-2.78.6-3.37-1.3-3.37-1.3-.45-1.13-1.1-1.43-1.1-1.43-.9-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.4.2 2.44.1 2.7.64.7 1.03 1.6 1.03 2.68 0 3.85-2.35 4.7-4.59 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
