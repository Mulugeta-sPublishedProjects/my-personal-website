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
        className="w-full mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-24 px-6 md:px-8"
      >
        {/* Left Section: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src="/portifolio-website.jpg"
              alt="Profile"
              fill
              style={{
                objectFit: "cover",
                filter: "grayscale(100%)",
                borderRadius: "10% 30% 50% 70%",
              }}
              className="shadow-md rounded-lg transition-transform hover:scale-105"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Center Section: Greeting Text */}
        <div className="flex-1 flex flex-col items-start space-y-6">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white">
            Hey there! <span className="wave">👋🏻</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-700 dark:text-gray-300 font-bold">
            I&apos;m Mulugeta Adamu
          </h2>

          {/* Typewriter Effect */}
          <div className="w-full max-w-lg text-primary-500 text-md">
            <Typewriter
              options={{
                strings: [
                  "Senior Frontend Developer",
                  "Specialist in React, Next.js & TypeScript",
                  "Expert in HTML, CSS, TailwindCSS & React Native",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          {/* About Section */}
          <div className="text-gray-900 dark:text-gray-300 text-base md:text-lg font-medium leading-relaxed mt-4">
            As a Senior Frontend Developer, I thrive on tackling complex
            projects with innovative teams. My skill set includes{" "}
            <strong>ReactJS</strong>, <strong>Next.js</strong>,{" "}
            <strong>React Native</strong>, <strong>JavaScript</strong>,{" "}
            <strong>TypeScript</strong>, and <strong>TailwindCSS</strong>. I
            specialize in <strong>frontend architecture</strong> and{" "}
            <strong>monorepo management</strong> with <strong>TurboRepo</strong>{" "}
            and <strong>Nx</strong>. My strengths lie in delivering{" "}
            <strong>high-quality, scalable</strong> solutions for{" "}
            <strong>seamless user experiences</strong>.
          </div>

          {/* Button Group */}
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="/cv.pdf"
              download
              aria-label="Download Resume"
              className="bg-primary-600 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-primary-600"
            >
              Download Resume
            </a>
            <Link href="https://t.me/mulugeta_adamu" passHref>
              <button
                aria-label="Contact"
                className="bg-primary-600 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-primary-800"
              >
                Contact
              </button>
            </Link>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-8 md:mt-0">
          <SocialMediaIcons />
        </div>
      </motion.div>
    </div>
  );
}
