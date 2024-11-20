import Image from "next/image";
import React from "react";

// Utility function moved to the module scope
function cleanDescription(desc: string, length: number): string {
  return desc.replaceAll(/<[^>]+>/g, "").slice(0, length) + "...";
}

interface BlogCardProps {
  post: {
    title: string;
    description: string;
    link: string;
    categories: string[];
    pubDate: string; // Publication date
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const { title, description, link, categories, pubDate } = post;

  // Extract the image URL or use a fallback image
  const imageUrl =
    new RegExp(/<img.*?src="(.*?)"/).exec(description)?.[1] ||
    "/default-image.png";

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Read the blog post titled "${title}"`}
      className="flex shadow-md bg-gray-200 dark:bg-gray-900 flex-col sm:flex-row items-center p-5 border border-gray-400 dark:border-gray-700 rounded-lg mb-5 hover:shadow-lg transition-shadow sm:gap-4 hover:bg-gray-100 dark:hover:bg-gray-800"
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
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          {cleanDescription(description, 100)}
        </p>

        {/* Publication Date */}
        <p className="text-sm  dark:text-gray-400 mt-2">
          Published on: <span className="text-primary-600">{pubDate}</span>
        </p>

        {/* Display categories as badges */}
        {categories && categories.length > 0 && (
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
        )}
      </div>
    </a>
  );
};

export default BlogCard;
