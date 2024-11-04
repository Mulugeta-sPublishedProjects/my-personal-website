import React from "react";

type TimelineItem = {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  period: string;
  description?: string;
};

type TimelineProps = {
  items: TimelineItem[];
  sectionTitle: string;
};

const Timeline: React.FC<TimelineProps> = ({ items, sectionTitle }) => {
  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        {sectionTitle}
      </h2>
      <div className="relative flex flex-col items-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative flex items-start space-x-4 w-full max-w-md"
          >
            {/* Centered icon node with connecting line */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-10 h-10 flex items-center justify-center bg-primary-500 text-white rounded-full">
                  {item.icon}
                </div>
                {index < items.length - 1 && (
                  <div className="absolute top-full left-1/2 w-0.5 h-16 bg-primary-500 -translate-x-1/2" />
                )}
              </div>
            </div>

            {/* Timeline content */}
            <div className="flex flex-col items-start space-y-2">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {item.title}
                <span className="text-primary-500"> @ {item.subtitle}</span>
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {item.period}
              </span>
              {item.description && (
                <p className="text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
