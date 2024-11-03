"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function AboutMe() {
  return (
    <div className="w-11/12 max-w-screen-xl mx-auto mt-12 flex flex-col md:flex-row items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">
      {/* Left Column: About Description and Personal Details */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* About Me Description */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h2>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Hello! I’m Mulugeta Adamu, a dedicated Senior Frontend Developer with
          a strong background in crafting high-performance, scalable web
          applications. I thrive in collaborative, challenging environments and
          bring expertise in ReactJS, Next.js, and modern frontend
          architectures.
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
            <strong>Residence:</strong> Ethiopia
          </p>
          <p>
            <strong>City:</strong> Addis Ababa
          </p>
          <p>
            <strong>Degree:</strong> Bachelor of Information Technology
          </p>
          <p>
            <strong>Freelance:</strong> Available on{" "}
            <a
              href="https://upwork.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:underline"
            >
              Upwork
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
        <Image
          src="/image.png" // Replace with the actual path to your image
          alt="Mulugeta Adamu"
          width={300}
          height={300}
          style={{
            filter: "grayscale(100%)",
            borderRadius: "30% 10% 70% 50% ",
          }}
          className="rounded-lg shadow-lg object-cover w-full h-full max-w-xs md:max-w-sm 
             border-t-8 border-r-4 border-l-2 border-primary-500"
        />
      </motion.div>
    </div>
  );
}
