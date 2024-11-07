import Image from "next/image";
import React from "react";

interface BlogCardProps {
  post: {
    title: string;
    description: string;
    link: string;
    categories: string[];
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const { title, description, link, categories } = post;

  const imageUrl = description.match(/<img.*?src="(.*?)"/)?.[1];

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex shadow-md bg-gray-200 flex-col sm:flex-row items-center p-5 border border-gray-400 rounded-lg mb-5 hover:shadow-lg transition-shadow sm:gap-4 hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700"
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title}
          width={100}
          height={100}
          className="w-full h-40 sm:w-28 sm:h-28 rounded-md object-cover mb-3 sm:mb-0"
        />
      )}
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-200">
          {title}
        </h3>
        <p className="text-gray-700 mt-2 dark:text-gray-300">
          {description.replaceAll(/<[^>]+>/g, "").slice(0, 100)}...
        </p>

        {/* Display categories as badges */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
          {categories.map((category, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm font-medium border border-gray-300 text-primary-700 bg-white rounded-full dark:border-gray-200 dark:bg-primary-800 dark:text-primary-100"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
