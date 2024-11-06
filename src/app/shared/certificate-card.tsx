// components/CertificationCard.tsx
import Image from "next/image";
import React from "react";
import ResponsiveImage from "./image-viewer";

interface CertificationProps {
  title: string;
  platform: string;
  completionDate: string;
  certificateLink: string;
  image: string;
}

const CertificationCard: React.FC<CertificationProps> = ({
  title,
  platform,
  completionDate,
  certificateLink,
  image,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative">
        <ResponsiveImage
          src={image}
          alt={title}
          layout="responsive"
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-t-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-75 rounded-t-lg"></div>
      </div>
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
          {platform}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-300 mb-3">
          Completed on {completionDate}
        </p>
        <a
          href={certificateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-4 py-2 bg-primary-500 text-white font-semibold rounded-md hover:bg-primary-600 transition"
        >
          View Certificate
        </a>
      </div>
    </div>
  );
};

export default CertificationCard;
