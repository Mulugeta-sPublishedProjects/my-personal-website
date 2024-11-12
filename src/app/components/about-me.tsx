"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FiExternalLink } from "react-icons/fi"; // Icon for external links

export default function AboutMe() {
  return (
    <div className="mt-12 px-4 md:px-8 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
      {/* Left Column: About Description and Personal Details */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* About Me Description */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h2>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Hi! I’m Mulugeta Adamu, a passionate Senior Frontend Developer with
          over 3 years of experience in building optimized and scalable web
          applications. My journey in tech began with a fascination for creating
          seamless user experiences, which I now channel into developing
          impactful digital solutions using{" "}
          <span className="font-semibold text-primary-500 underline">
            ReactJS
          </span>
          ,{" "}
          <span className="font-semibold text-primary-500 underline">
            Next.js
          </span>
          , and modern web technologies.
        </p>

        {/* Personal Details */}
        <div className="space-y-4 text-base md:text-lg text-gray-900 dark:text-gray-300">
          <p>
            <strong>Name:</strong> Mulugeta Adamu
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:mulugeta.adamu@example.com"
              className="text-primary-500 hover:underline"
            >
              mulugeta.adamu@example.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+251983054774"
              className="text-primary-500 hover:underline"
            >
              +251 983 054 774
            </a>
          </p>
          <p>
            <strong>Location:</strong> Addis Ababa, Ethiopia
          </p>
          <p>
            <strong>Degree:</strong> Bachelor of Information Technology
          </p>
          <p>
            <strong>Freelance Availability:</strong> Available on{" "}
            <a
              href="https://upwork.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:underline flex items-center"
            >
              Upwork <FiExternalLink className="ml-1" />
            </a>
          </p>
        </div>
      </motion.div>

      {/* Right Column: Profile Image */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="w-64 h-64 md:w-80 md:h-80 relative">
          <Image
            src="/image.png" // Replace with the actual path to your image
            alt="Mulugeta Adamu"
            objectFit="cover"
            height={350}
            width={350}
            style={{
              filter: "grayscale(100%)",
              borderRadius: "25% 15% 65% 40%",
            }}
            className="rounded-lg shadow-lg border-t-8 border-r-4 border-l-2 border-primary-500"
          />
        </div>
      </motion.div>
    </div>
  );
}
