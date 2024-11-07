import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FeedProps {
  feed: {
    url: string;
    title: string;
    link: string;
    description: string;
    image: string;
  };
}

const FeedCard: React.FC<FeedProps> = ({ feed }) => {
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 sm:p-6 mb-6 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 bg-white dark:bg-gray-800">
      <Image
        src={feed.image}
        alt="Profile"
        width={100}
        height={100}
        className="w-20 h-20 sm:w-16 sm:h-16 rounded-full border border-gray-200 dark:border-gray-600 object-cover"
      />

      <div className="text-center sm:text-left flex-1">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
          {feed.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3 line-clamp-2">
          {feed.description}
        </p>

        <Link
          href={feed.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 dark:text-primary-400 hover:underline"
        >
          View on Medium
        </Link>
      </div>
    </div>
  );
};

export default FeedCard;
