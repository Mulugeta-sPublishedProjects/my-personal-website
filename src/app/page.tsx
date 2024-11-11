"use client";
import { motion } from "framer-motion";
import AboutMe from "./components/about-me";

import Greeting from "./components/home";
import { servicesData } from "./components/services";
import ServiceCard from "./components/service-card";

export default function Home() {
  return (
    <div className="mt-12">
      <Greeting />
      <AboutMe />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="w-full flex flex-col items-center"
      >
        <div className="w-full p-4 sm:p-6 lg:p-8">
          {/* Centered Header */}
          <div className="mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Services
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8">
              I offer a range of services to help you build and optimize your
              digital products. Here’s what I can do for you.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>

          {/* Contact Me Section */}
          <div className="bg-gradient-to-r from-gray-500 to-primary-600 text-white p-6 sm:p-8 rounded-lg shadow-lg text-center mt-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              Contact Me
            </h3>
            <p className="text-base sm:text-lg mb-4">
              Ready to get started or have questions? I’d love to hear about
              your project! Reach out, and let’s discuss how we can work
              together to achieve your goals.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-500 font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition duration-200 hover:bg-gray-100"
            >
              Let’s Talk
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
