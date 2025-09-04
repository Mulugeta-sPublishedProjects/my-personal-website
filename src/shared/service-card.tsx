import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all flex flex-col items-center text-center"
      aria-label={`Service: ${title}`}
    >
      {/* Icon Section */}
      <div className="text-primary-600 dark:text-primary-400 text-4xl mb-4">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
