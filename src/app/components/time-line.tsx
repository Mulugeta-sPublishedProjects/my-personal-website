import React from "react";

type TimelineItem = {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  period: string;
  description?: string;
  employmentType?: "Full-Time" | "Part-Time" | undefined;
  locationType?: "Remote" | "Onsite" | undefined;
};

type TimelineProps = {
  items: TimelineItem[];
  sectionTitle: string;
};

const Timeline: React.FC<TimelineProps> = ({ items, sectionTitle }) => {
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
  ]; // Define a set of colors for nodes

  return (
    <div className="space-y-12 w-full">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
        {sectionTitle}
      </h2>
      <div className="relative flex flex-col items-center space-y-8 w-full">
        {items.map((item, index) => (
          <div
            key={item.period}
            className="relative flex flex-col md:flex-row items-start w-full max-w-full"
          >
            {/* Centered icon node with connecting line */}
            <div className=" hidden md:block  flex-col items-center mb-4 md:mb-0 md:mr-4">
              <div className="relative">
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white rounded-full ${
                    colors[index % colors.length]
                  }`} // Apply color based on index
                >
                  {item.icon}
                </div>
                {index < items.length - 1 && (
                  <div className="hidden md:block absolute top-full left-1/2 w-0.5 h-16 bg-gray-300 dark:bg-gray-600 -translate-x-1/2" />
                )}
              </div>
            </div>

            {/* Timeline content as a full-width padded card */}
            <div className="flex flex-col p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full md:max-w-4xl">
              <div className="flex flex-col md:flex-row justify-between items-start w-full">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {item.title}
                    <span className="text-primary-500"> @ {item.subtitle}</span>
                  </h3>
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {item.period}
                  </span>
                  {item.description && (
                    <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm sm:text-base">
                      {item.description}
                    </p>
                  )}
                </div>
                {/* Employment Type and Location Type indicators */}
                <div className="flex flex-col items-start md:items-end text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-4 md:mt-0">
                  <span
                    className={`${
                      item.employmentType === "Full-Time"
                        ? "text-green-600"
                        : "text-blue-600"
                    } font-semibold`}
                  >
                    {item.employmentType}
                  </span>
                  <span
                    className={`${
                      item.locationType === "Remote"
                        ? "text-purple-600"
                        : "text-orange-600"
                    } font-semibold`}
                  >
                    {item.locationType}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
