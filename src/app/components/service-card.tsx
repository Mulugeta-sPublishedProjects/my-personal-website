import React from "react";

type serviceProps = {
  title: string;
  description: string;
  icon: any;
};

const ServiceCard = ({ title, description, icon }: serviceProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-gray-100 via-primary-200 to-gray-500 dark:hover:bg-gradient-to-r dark:from-primary-600 dark:to-primary-500">
      <div className="flex items-center">
        {/* Icon on the Left */}
        <div className="text-primary-500 hidden md:block text-4xl md:text-5xl mr-4 flex-shrink-0">
          {icon}
        </div>

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
