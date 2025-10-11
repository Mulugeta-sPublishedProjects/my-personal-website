"use client";

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
  if (!feed.title) return "Medium Blogs";

  return (
    <article className="border border-border rounded-lg p-4 sm:p-5 mb-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5 bg-card">
      {feed.image && (
        <Image
          src={feed.image || "/default-image.png"}
          alt="Feed Image"
          width={80}
          height={80}
          className="w-16 h-16 sm:w-14 sm:h-14 rounded-full border border-border object-cover"
        />
      )}

      <div className="text-center sm:text-left flex-1">
        <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-1">
          {feed.title}
        </h2>

        {feed.link && (
          <Link
            href={feed.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 hover:underline text-sm"
            aria-label={`View feed titled "${feed.title}" on Medium`}
          >
            View on Medium
          </Link>
        )}
      </div>
    </article>
  );
};

export default FeedCard;
