"use client";

import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Link from "next/link";
import SocialMediaIcons from "./social-media";

export default function Greeting() {
  return (
    <div className="mt-36">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="w-full mx-8 flex flex-col md:flex-row items-start gap-24"
      >
        {/* Left: Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="flex justify-center md:justify-start"
        >
          <Image
            src="/portifolio-website.jpg"
            alt="Profile"
            width={350}
            height={350}
            style={{
              filter: "grayscale(100%)",
              borderRadius: "10% 30% 50% 70%",
              border: "10px solid #fff",
            }}
            loading="lazy"
            className="shadow-md transition-transform hover:scale-105 w-72 h-72 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-lg object-cover grayscale border-10 border-white"
          />
        </motion.div>

        {/* Center: Greeting Text Section */}
        <div className="flex-1 flex flex-col items-start space-y-4 px-4 md:px-0">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white hover:text-primary-500">
            Hey there! <span className="wave">👋🏻</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl mt-1 text-gray-700 dark:text-gray-300 font-bold">
            I&apos;m Mulugeta Adamu
          </h2>

          {/* Fixed Width Typewriter to Reduce Shifts */}
          <div className="w-64 md:w-72 lg:w-80 text-primary-500">
            <Typewriter
              options={{
                strings: [
                  "Senior Frontend Developer",
                  "Expert in ReactJS, NextJS & React Native",
                  "Proficient in HTML, CSS, TailwindCSS & Bootstrap",
                  "Skilled in TypeScript, JavaScript & Redux",
                  "Passionate about AI & Web Performance",
                ],
                autoStart: true,
                loop: true,
                cursor: "", // Disable cursor to reduce visual shifts
              }}
            />
          </div>

          <div className="text-gray-900 dark:text-gray-300 text-base md:text-lg font-semibold leading-relaxed mt-2 font-sans">
            I&apos;m a Senior Frontend Developer who loves tackling challenging
            projects with innovative teams. My expertise spans{" "}
            <strong className="font-bold">ReactJS</strong>,{" "}
            <strong className="font-bold">Next.js</strong>,{" "}
            <strong className="font-bold">React Native</strong>,{" "}
            <strong className="font-bold">JavaScript</strong>,{" "}
            <strong className="font-bold">TypeScript</strong>, and{" "}
            <strong className="font-bold">TailwindCSS</strong>. I have a strong
            background in{" "}
            <strong className="font-bold">frontend architecture</strong>,{" "}
            <strong className="font-bold">monorepo management</strong> (using{" "}
            <strong className="font-bold">TurboRepo</strong> and{" "}
            <strong className="font-bold">Nx</strong>), and optimizing
            performance with <strong className="font-bold">lazy loading</strong>{" "}
            and <strong className="font-bold">code splitting</strong>. Quality,
            scalability, and seamless user experiences are my specialties.
          </div>

          {/* Button Group */}
          <div className="flex mt-4 space-x-4">
            <a
              href="/resume.pdf"
              download
              aria-label="Download Resume"
              className="bg-gradient-to-r from-primary-500 to-gray-500 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg transition-all duration-200 ease-in-out hover:from-primary-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Download Resume
            </a>
            <Link href="/contact" passHref>
              <button
                aria-label="Contact"
                className="bg-gradient-to-r from-primary-400 to-gray-700 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg transition-all duration-200 ease-in-out hover:from-primary-500 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Contact
              </button>
            </Link>
          </div>
        </div>

        {/* Right: Social Media Icons Column */}
        <div className="md:ml-auto space-y-4 mt-6 md:mt-0">
          <SocialMediaIcons />
        </div>
      </motion.div>
    </div>
  );
}
