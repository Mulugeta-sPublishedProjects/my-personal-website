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
    <div className="border border-gray-300 rounded-md p-6 mb-6 shadow-sm hover:shadow-md transition-shadow flex items-center space-x-4">
      {/* Profile Image */}
      <img
        src={feed.image}
        alt="Profile"
        className="w-16 h-16 rounded-full border border-gray-200"
      />
      <div>
        {/* Title and Link */}
        <h2 className="text-2xl font-semibold text-gray-800">{feed.title}</h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-2">{feed.description}</p>

        {/* Medium Profile Link */}
        <Link
          href={feed.link}
          target="_blank"
          className="text-blue-500 hover:text-blue-700"
        >
          View on Medium
        </Link>
      </div>
    </div>
  );
};

export default FeedCard;
