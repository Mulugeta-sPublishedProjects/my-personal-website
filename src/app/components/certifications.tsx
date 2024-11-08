// components/Certifications.tsx
import React from "react";
import CertificationCard from "../shared/certificate-card";

const certificationsData = [
  {
    title: "Machine Learning",
    platform: "Coursera",
    completionDate: "September 10, 2023",
    certificateLink: "https://coursera.org/certificate/machine-learning",
    image: "/images/machine-learning-cover.jpg",
  },
  {
    title: "Introduction to Data Science",
    platform: "Coursera",
    completionDate: "October 5, 2023",
    certificateLink: "https://coursera.org/certificate/data-science",
    image: "/images/data-science-cover.jpg",
  },
  {
    title: "React Development",
    platform: "Coursera",
    completionDate: "August 15, 2023",
    certificateLink: "https://coursera.org/certificate/react-development",
    image: "/images/react-development-cover.jpg",
  },
];

export const Certifications: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 w-full">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
        Certifications
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {certificationsData.map((cert, index) => (
          <CertificationCard
            key={index}
            title={cert.title}
            platform={cert.platform}
            completionDate={cert.completionDate}
            certificateLink={cert.certificateLink}
            image={cert.image}
          />
        ))}
      </div>
    </div>
  );
};
