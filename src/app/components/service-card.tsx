import React from "react";

type serviceProps = {
  title: string;
  description: string;
};

const ServiceCard = ({ title, description }: serviceProps) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-200 ">
      <div className="flex items-center">
        {/* Title and Description on the Right */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 text-left">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base text-left">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
