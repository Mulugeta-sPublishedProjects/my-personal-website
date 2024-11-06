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

  // Extract the first image URL from the description
  const imageUrl = description.match(/<img.*?src="(.*?)"/)?.[1];

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col sm:flex-row items-center p-4 border border-primary-500 rounded-lg mb-4 hover:shadow-lg transition-shadow sm:gap-4 hover:bg-gray-300 dark:border-gray-900 dark:hover:bg-primary-500"
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title}
          width={350}
          height={350}
          className="w-full h-40 sm:w-24 sm:h-24 rounded-md object-cover mb-3 sm:mb-0"
        />
      )}
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-lg font-semibold text-primary-500 dark:text-primary-100">
          {title}
        </h3>
        <p className="text-gray-600 mt-1 dark:text-gray-300">
          {description.replaceAll(/<[^>]+>/g, "").slice(0, 100)}...
        </p>

        {/* Display categories as badges */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
          {categories.map((category, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm border border-primary-500 text-primary-500 bg-white rounded-full dark:border-primary-100 dark:bg-primary-900 dark:text-primary-100"
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
