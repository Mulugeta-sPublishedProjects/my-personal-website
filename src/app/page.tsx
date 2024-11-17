"use client";
import Greeting from "./components/home";
import { servicesData } from "./shared/utils/services";
import ServiceCard from "./components/service-card";

export default function Home() {
  return (
    <div className="mt-12 px-4 sm:px-6 lg:px-8">
      {/* Greeting Section */}
      <Greeting />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8 mt-12">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
}
