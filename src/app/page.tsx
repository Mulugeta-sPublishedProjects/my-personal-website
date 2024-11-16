"use client";
import { motion } from "framer-motion";
import Greeting from "./components/home";
import { servicesData } from "./components/services";
import ServiceCard from "./components/service-card";

export default function Home() {
  return (
    <div className="mt-12 px-4 sm:px-6 lg:px-8">
      {/* Greeting Section */}
      <Greeting />

      {/* Services Section */}
      <section className="w-full flex flex-col items-center mt-24 md:mt-16">
        <div className="w-full  px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My Services
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
              Explore the wide range of professional services I offer, tailored
              to meet your specific needs.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mt-12">
            {servicesData.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: service.id * 0.1 }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
