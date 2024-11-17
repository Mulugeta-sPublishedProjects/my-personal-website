"use client";
import React, { useEffect, useState } from "react";
import { MediumAPiURl } from "../shared/utils/medium-api-url";
import BlogCard from "../shared/blog-card";
import FeedCard from "../shared/feed-card";
import { Splash } from "../shared/loader";

interface BlogPost {
  title: string;
  pubDate: string;
  link: string;
  categories: string[];
  content: string;
}

interface Feed {
  url: string;
  title: string;
  link: string;
  description: string;
  image: string;
}

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [feed, setFeed] = useState<Feed | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true); // Set loading to true before fetching
      try {
        const response = await fetch(MediumAPiURl);
        const data = await response.json();
        setPosts(data.items); // Array of posts
        setFeed(data.feed); // Feed info
      } catch (error) {
        console.error("Error fetching Medium posts:", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };
    fetchPosts();
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <div className="container mx-auto px-4">
      {/* Feed Card */}
      {feed && <FeedCard feed={feed} />}

      {/* Blog Posts Grid */}
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.link} post={post as any} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
