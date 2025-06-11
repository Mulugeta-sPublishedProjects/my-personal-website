"use client";

import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Link from "next/link";
import SocialMediaIcons from "./social-media";
import AboutText from "./about-text";

const Greeting = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const profileImageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="mt-36">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 1.5 }}
        className="w-full mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-24 px-6 md:px-8"
      >
        {/* Left Section: Profile Image */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={profileImageVariants}
          transition={{ duration: 1.2 }}
          className="flex justify-center md:justify-start"
        >
          <div
            className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80"
            style={{ minWidth: "192px", minHeight: "192px" }} // Prevent layout shifts
          >
            <Image
              src="/portifolio-website.webp"
              alt="Profile"
              fill
              style={{
                objectFit: "cover",
              }}
              className="shadow-md rounded-[10%_30%_50%_70%] transition-transform hover:scale-105"
              priority
              sizes="(max-width: 640px) 12rem, (max-width: 768px) 16rem, 20rem"
            />
          </div>
        </motion.div>

        {/* Center Section: Greeting Text */}
        <div className="flex-1 flex flex-col items-start space-y-6">
          <h1 className="text-base sm:text-lg md:text-2xl font-bold text-black dark:text-white">
            Hey there!{" "}
            <span className="wave" aria-hidden="true">
              👋🏻
            </span>
          </h1>

          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-700 dark:text-gray-300 font-bold">
            I&apos;m Mulugeta Adamu
          </h2>

          {/* Typewriter Effect */}
          <div className="w-full max-w-lg text-primary-600 text-md">
            <noscript>Senior Frontend Developer</noscript>
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
          <AboutText />

          {/* Button Group */}
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="/resume-two.pdf"
              download
              aria-label="Download Resume"
              className="bg-primary-800 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-primary-700"
            >
              Download Resume
            </a>

            <Link href="https://t.me/mulugeta_adamu" target="_blank" passHref>
              <div
                aria-label="Contact"
                className="bg-primary-700 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-primary-700"
              >
                Contact
              </div>
            </Link>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="md:mt-0 md:ml-auto">
          <SocialMediaIcons />
        </div>
      </motion.div>
    </div>
  );
};

export default Greeting;
