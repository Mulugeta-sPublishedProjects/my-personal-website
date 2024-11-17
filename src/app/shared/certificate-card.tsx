// components/CertificationCard.tsx
import React from "react";
import ResponsiveImage from "./image-viewer";

interface CertificationProps {
  title: string;
  platform: string;
  completionDate: string;
  certificateLink: string;
  image: string;
  className: string;
}

const CertificationCard: React.FC<CertificationProps> = ({
  title,
  platform,
  completionDate,
  certificateLink,
  image,
  className,
}) => {
  return (
    <div
      className={`bg-white ${className} dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl`}
    >
      {/* Image Section with Padding */}
      <div className="p-4">
        <div className="rounded-lg overflow-hidden">
          <ResponsiveImage
            src={image}
            alt={title}
            layout="responsive"
            objectFit="cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white dark:bg-gray-800 p-4 sm:p-6">
        <div className="flex flex-row justify-between">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1">
            {title}
          </h2>
          <p className="text-sm text-primary-600 dark:text-gray-400 mb-2">
            {platform}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-xs text-primary-500 dark:text-gray-300">
            Completed on {completionDate}
          </p>
          <a
            href={certificateLink}
            download
            className="px-3 sm:px-4 py-1 sm:py-2 bg-primary-500 text-white font-semibold text-xs sm:text-sm rounded-md hover:bg-primary-600 transition"
          >
            View Certificate
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
