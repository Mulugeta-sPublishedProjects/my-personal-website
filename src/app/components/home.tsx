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
        {/* Left Section: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative w-72 h-72 sm:w-64 sm:h-64 md:w-80 md:h-80">
            <Image
              src="/portifolio-website.jpg"
              alt="Profile"
              fill
              style={{
                objectFit: "cover",
                filter: "grayscale(100%)",
                borderRadius: "10% 30% 50% 70%",
                border: "10px solid #fff",
              }}
              className="shadow-md transition-transform hover:scale-105 rounded-lg"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Center Section: Greeting Text */}
        <div className="flex-1 flex flex-col items-start space-y-4 px-4 md:px-0">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white hover:text-primary-500">
            Hey there! <span className="wave">👋🏻</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl mt-1 text-gray-700 dark:text-gray-300 font-bold">
            I&apos;m Mulugeta Adamu
          </h2>

          {/* Fixed Width for Typewriter Effect */}
          <div className="w-72 md:w-96 lg:w-[28rem] text-primary-500 text-md">
            <Typewriter
              options={{
                strings: [
                  "Senior Frontend Developer",
                  "Specialist in React, Next.js & TypeScript",
                  "Expert in HTML, CSS, TailwindCSS & React Native",
                ],
                autoStart: true,
                loop: true,
                cursor: "",
              }}
            />
          </div>

          {/* About Section */}
          <div className="text-gray-900 dark:text-gray-300 text-base md:text-lg font-semibold leading-relaxed mt-2 font-sans">
            As a Senior Frontend Developer, I thrive on tackling complex
            projects with innovative teams. My skill set includes{" "}
            <strong className="font-bold">ReactJS</strong>,{" "}
            <strong className="font-bold">Next.js</strong>,{" "}
            <strong className="font-bold">React Native</strong>,{" "}
            <strong className="font-bold">JavaScript</strong>,{" "}
            <strong className="font-bold">TypeScript</strong>, and{" "}
            <strong className="font-bold">TailwindCSS</strong>. I specialize in{" "}
            <strong className="font-bold">frontend architecture</strong> and{" "}
            <strong className="font-bold">monorepo management</strong> with{" "}
            <strong className="font-bold">TurboRepo</strong> and{" "}
            <strong className="font-bold">Nx</strong>. My strengths lie in{" "}
            <strong className="font-bold">performance optimization</strong>,{" "}
            delivering <strong className="font-bold">high-quality</strong>,{" "}
            <strong className="font-bold">scalable</strong> solutions for
            <strong className="font-bold">seamless user experiences</strong>.
          </div>

          {/* Button Group */}
          <div className="flex mt-4 space-x-4">
            <a
              href="/cv.pdf"
              download
              aria-label="Download Resume"
              className="bg-gradient-to-r from-primary-500 to-gray-500 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg transition-all duration-200 ease-in-out hover:from-primary-600 hover:to-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Download Resume
            </a>
            <Link target="_blank" href="https://t.me/mulugeta_adamu" passHref>
              <button
                aria-label="Contact"
                className="bg-gradient-to-r from-primary-700 to-gray-500 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg transition-all duration-200 ease-in-out hover:from-gray-600 hover:to-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Contact
              </button>
            </Link>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="space-y-4 mt-6 md:mt-0">
          <SocialMediaIcons />
        </div>
      </motion.div>
    </div>
  );
}
