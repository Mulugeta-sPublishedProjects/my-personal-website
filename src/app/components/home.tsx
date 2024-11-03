"use client";
import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Link from "next/link";

export default function Greeting() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="w-11/12 max-w-screen-xl mx-auto mt-12"
    >
      <div className="flex flex-col md:flex-row items-center justify-start gap-1">
        {/* Greeting Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="flex-1 max-w-full flex justify-center md:justify-start mb-8 md:mb-0"
        >
          <Image
            src="/portifolio-website.jpg"
            alt="Profile"
            width={350}
            height={350}
            className="shadow-lg transition-transform hover:scale-105"
            style={{
              width: "350px",
              height: "350px",
              filter: "grayscale(100%)",
              borderRadius: "10% 30% 50% 70%",
              border: "10px solid #fff",
            }}
          />
        </motion.div>

        {/* Greeting Text Section */}
        <div className="flex flex-col items-start flex-1 text-left">
          {/* Greeting Title */}
          <h1 className="text-xl md:text-xl font-bold text-black dark:text-white transition-colors hover:text-primary-500">
            Hey there!{" "}
            <span className="wave" aria-label="waving hand emoji, greeting">
              👋🏻
            </span>
          </h1>

          {/* Name Header */}
          <h2 className="text-2xl md:text-3xl mt-2 text-gray-700 dark:text-gray-300 font-bold">
            I&apos;m Mulugeta Adamu
          </h2>

          {/* Typing Animation Section */}
          <div className="text-lg md:text-xl mt-3 text-gray-600 dark:text-gray-400">
            <span className="text-primary-500">
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
                }}
              />
            </span>
          </div>

          {/* Description Section */}
          <p className="text-base md:text-lg mt-4 text-gray-900 font-semibold dark:text-gray-300 leading-relaxed">
            I&apos;m a Senior Frontend Developer who loves tackling challenging
            projects with innovative teams. My expertise spans{" "}
            <span className="font-semibold">ReactJS</span>,{" "}
            <span className="font-semibold">Next.js</span>, and{" "}
            <span className="font-semibold">React Native</span>, along with{" "}
            <span className="font-semibold">JavaScript</span>,{" "}
            <span className="font-semibold">TypeScript</span>, and{" "}
            <span className="font-semibold">TailwindCSS</span>. I have a strong
            background in{" "}
            <span className="font-semibold">frontend architecture</span>,{" "}
            <span className="font-semibold">monorepo management</span> (using{" "}
            <span className="font-semibold">TurboRepo</span> and{" "}
            <span className="font-semibold">Nx</span>), and optimizing
            performance with <span className="font-semibold">lazy loading</span>{" "}
            and <span className="font-semibold">code splitting</span>. Quality,
            scalability, and seamless user experiences are my specialties.
          </p>

          {/* Button Group */}
          <div className="flex mt-6 space-x-4">
            {/* Download Resume Button */}
            <a
              href="/resume.pdf" // Update with actual resume file path
              download
              aria-label="Download Resume"
              className="bg-gradient-to-r from-primary-500 to-gray-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-200 ease-in-out hover:from-primary-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Download Resume
            </a>

            {/* Contact Button */}
            <Link href="/contact" passHref>
              <button
                aria-label="Contact"
                className="bg-gradient-to-r from-primary-400 to-gray-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-200 ease-in-out hover:from-primary-500 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
