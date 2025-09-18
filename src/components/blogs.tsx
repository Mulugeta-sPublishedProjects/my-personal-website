"use client";
import BlogCard from "@/shared/blog-card";
import FeedCard from "@/shared/feed-card";
import { Splash } from "@/shared/loader";
import { MediumAPiURl } from "@/shared/utils/medium-api-url";
import React, { useEffect, useState } from "react";

// TypeScript interfaces for better type safety
interface BlogPost {
  title: string;
  pubDate: string;
  link: string;
  categories: string[];
  content: string;
  description: string;
  thumbnail?: string;
}

interface Feed {
  url: string;
  title: string;
  link: string;
  description: string;
  image: string;
}

interface MediumApiResponse {
  feed: Feed;
  items: RawBlogPost[];
}

interface RawBlogPost {
  title: string;
  pubDate: string;
  link: string;
  categories: string[];
  content: string;
}

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [feed, setFeed] = useState<Feed | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRetrying, setIsRetrying] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch blog posts
  const fetchPosts = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(MediumAPiURl);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch: ${response.status} ${response.statusText}`,
        );
      }

      const data: MediumApiResponse = await response.json();

      if (!data.items || !Array.isArray(data.items)) {
        throw new Error("Invalid data format received from Medium API");
      }

      // Process posts to extract thumbnails and clean descriptions
      const processedPosts = data.items.map((post: RawBlogPost): BlogPost => {
        // Extract thumbnail image from content
        const thumbnailMatch = post.content.match(/<img[^>]+src="([^">]+)"/);
        const thumbnail = thumbnailMatch ? thumbnailMatch[1] : undefined;

        // Clean description by removing HTML tags
        const cleanDescription =
          post.content.replace(/<[^>]+>/g, "").substring(0, 150) +
          (post.content.length > 150 ? "..." : "");

        return {
          ...post,
          thumbnail,
          description: cleanDescription,
        };
      });

      setPosts(processedPosts);
      setFeed(data.feed);
    } catch (err) {
      console.error("Error fetching Medium posts:", err);
      setError(
        err instanceof Error ? err.message : "An unknown error occurred",
      );
    } finally {
      setIsLoading(false);
      setIsRetrying(false);
    }
  };

  // Retry function with loading state
  const handleRetry = () => {
    setIsRetrying(true);
    fetchPosts();
  };

  // Initial fetch
  useEffect(() => {
    fetchPosts();
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <section
        id="blog"
        className="container mx-auto px-4 py-12 min-h-[60vh] flex items-center justify-center"
        aria-label="Loading blog posts"
        aria-busy="true"
      >
        <Splash />
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section id="blog" className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-red-50 dark:bg-red-900/20 p-8 rounded-lg border border-red-200 dark:border-red-800">
          <h2 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-4">
            Oops! Something went wrong
          </h2>
          <p className="text-red-600 dark:text-red-400 mb-6">
            {error}. Please try again later.
          </p>
          <button
            onClick={handleRetry}
            disabled={isRetrying}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
            aria-label="Retry loading blog posts"
          >
            {isRetrying ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                Retrying...
              </>
            ) : (
              "Retry"
            )}
          </button>
        </div>
      </section>
    );
  }

  // Empty state
  if (posts.length === 0) {
    return (
      <section id="blog" className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            No blog posts found
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            There are currently no blog posts to display. Check back later for
            updates!
          </p>
        </div>
      </section>
    );
  }

  // Success state
  return (
    <section
      id="blog"
      className="container mx-auto px-4 py-28 relative z-0"
      aria-labelledby="blog-heading"
    >
      <div className="text-center mb-12">
        <h1 id="blog-heading" className="text-4xl md:text-5xl font-bold mb-4">
          Latest Blog Posts
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Thoughts, tutorials, and insights about web development and more
        </p>
      </div>

      {/* Feed Card */}
      {feed && <FeedCard feed={feed} />}

      {/* Blog Posts Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.link} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogList;
