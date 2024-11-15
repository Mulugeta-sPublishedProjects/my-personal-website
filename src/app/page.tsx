"use client";
import { motion } from "framer-motion";
import AboutMe from "./components/about-me";
import Greeting from "./components/home";
import { servicesData } from "./components/services";
import ServiceCard from "./components/service-card";

export default function Home() {
  return (
    <div className="mt-12 px-4 sm:px-6 lg:px-8">
      <Greeting />
      <AboutMe />
      <div className="w-full flex mt-24 md:mt-0  flex-col items-center">
        <div className="w-full p-4 sm:p-6 lg:p-8">
          {/* Centered Header */}
          <div className="mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My Services
            </h1>
          </div>

          {/* Service Cards Section */}
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {servicesData.map((service) => (
              <div key={service.id}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
