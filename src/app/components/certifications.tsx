// components/Certifications.tsx
import React from "react";
import CertificationCard from "../shared/certificate-card";

const certificationsData = [
  {
    title: "Meta FrontEnd  Developer",
    platform: "Coursera",
    completionDate: " Oct 14, 2023",
    certificateLink:
      "https://coursera.org/share/ea7ba395b0574c1699e377f93a03c207",
    image: "/certificates/meta-front-end.png",
  },
  {
    title: "Advanced React",
    platform: "Coursera",
    completionDate: "March 5, 2023",
    certificateLink:
      "https://www.coursera.org/account/accomplishments/verify/RPF6X7K6E8VY",
    image: "/certificates/advanced-react.png",
  },
  {
    title: "Introduction To Backends",
    platform: "Coursera",
    completionDate: "Feb 18, 2023",
    certificateLink:
      "https://www.coursera.org/account/accomplishments/certificate/6Y2U3RY3EAGR",
    image: "/certificates/intro-backend.png",
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
