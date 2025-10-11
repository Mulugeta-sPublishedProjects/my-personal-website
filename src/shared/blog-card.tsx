"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

interface BlogCardProps {
  post: {
    title: string;
    description: string;
    link: string;
    categories: string[];
    pubDate: string;
    thumbnail?: string;
  };
}

// Format date for better readability
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const { title, description, link, categories, pubDate, thumbnail } = post;

  return (
    <div className="bg-card rounded-xl border border-border transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5 flex flex-col h-full">
      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden bg-muted">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full w-full bg-muted/50">
            <span className="text-muted-foreground text-sm font-medium">
              No Image
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 line-clamp-2 leading-tight">
            {title}
          </h3>
          <p className="text-muted-foreground text-xs mb-3">
            {formatDate(pubDate)}
          </p>
          <p className="text-muted-foreground text-sm mb-5 line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Categories */}
        {categories && categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {categories.slice(0, 3).map((category, index) => (
              <span
                key={index}
                className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
              >
                {category}
              </span>
            ))}
            {categories.length > 3 && (
              <span className="px-2.5 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
                +{categories.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Read More Button */}
        <div className="mt-auto">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm transition-colors"
          >
            Read Article
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
