"use client";
import BlogCard from "@/shared/blog-card";
import FeedCard from "@/shared/feed-card";
import { Splash } from "@/shared/loader";
import { MediumAPiURl } from "@/shared/utils/medium-api-url";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

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
  const [posts, setPosts] = useState<any[]>([]);
  const [feed, setFeed] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  // Function to fetch blog posts
  const fetchPosts = async () => {
    setLoading(true);
    setError(undefined);

    try {
      const response = await fetch(MediumAPiURl);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch: ${response.status} ${response.statusText}`
        );
      }

      const data: MediumApiResponse = await response.json();

      // Set feed data
      if (data.feed) {
        setFeed(data.feed);
      } else {
        setFeed(undefined);
      }

      if (
        data.items === null ||
        data.items === undefined ||
        !Array.isArray(data.items)
      ) {
        throw new Error("Invalid data format received from Medium API");
      }

      // Process posts to extract thumbnails and clean descriptions
      const processedPosts = data.items.map((post: RawBlogPost) => {
        // Extract thumbnail image from content
        const thumbnailMatch = post.content.match(/<img[^>]+src="([^">]+)"/);
        const thumbnail = thumbnailMatch ? thumbnailMatch[1] : undefined;

        // Clean description by removing HTML tags
        const cleanDescription =
          post.content.replaceAll(/<[^>]+>/g, "").slice(0, 150) +
          (post.content.length > 150 ? "..." : "");

        return {
          title: post.title,
          pubDate: post.pubDate,
          link: post.link,
          categories: post.categories,
          content: post.content,
          description: cleanDescription,
          ...(thumbnail === undefined ? {} : { thumbnail }),
        };
      });

      setPosts(processedPosts);
    } catch (error_) {
      console.error("Error fetching Medium posts:", error_);
      setError(
        error_ instanceof Error ? error_.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  // Handler for retry button click
  const handleRetryClick = useCallback(() => {
    fetchPosts();
  }, []);

  // Handler for GitHub link click
  const handleGitHubClick = useCallback(() => {
    globalThis.open("https://github.com/mulugeta-adamu", "_blank");
  }, []);

  // Initial fetch
  useEffect(() => {
    fetchPosts();
  }, []);

  // Loading state
  if (loading) {
    return (
      <section
        id="blog"
        className="w-full py-16 sm:py-20 md:py-24 min-h-[60vh] flex items-center justify-center"
        aria-label="Loading blog posts"
        aria-busy="true"
      >
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Splash />
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section id="blog" className="w-full py-16 sm:py-20 md:py-24">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto bg-destructive/10 p-6 sm:p-8 rounded-xl border border-destructive/20">
            <h2 className="text-2xl font-bold text-destructive mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-destructive/80 mb-6">
              {error}. Please try again later.
            </p>
            <button
              onClick={handleRetryClick}
              disabled={loading}
              className="px-5 py-2.5 bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded-lg transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
              aria-label="Retry loading blog posts"
            >
              {loading ? (
                <>
                  <span className="size-4 animate-spin rounded-full border-2 border-destructive-foreground border-t-transparent"></span>
                  Retrying...
                </>
              ) : (
                "Retry"
              )}
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Empty state
  if (posts.length === 0) {
    return (
      <section id="blog" className="w-full py-16 sm:py-20 md:py-24">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto bg-destructive/10 p-6 sm:p-8 rounded-xl border border-destructive/20">
            <h2 className="text-2xl font-bold text-destructive mb-4">
              No Blog Posts Yet
            </h2>
            <p className="text-destructive/80 mb-6">
              I&apos;m working on creating some amazing content. Check back
              soon!
            </p>
            <button
              onClick={handleGitHubClick}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2 rounded-lg gap-2"
            >
              <Github className="size-4" /> Follow on GitHub
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Success state
  return (
    <section
      id="blog"
      className="w-full py-16 sm:py-20 md:py-24"
      aria-labelledby="blog-heading"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1
            id="blog-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Latest Blog Posts
          </h1>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development and more
          </p>
        </div>

        {/* Feed Card */}
        {feed && <FeedCard feed={feed} />}

        {/* Blog Posts Grid */}
        <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12">
          {posts.map((post) => (
            <BlogCard key={post.link} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
