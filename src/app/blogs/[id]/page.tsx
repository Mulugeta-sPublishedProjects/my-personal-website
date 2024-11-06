"use client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface BlogDetailProps {
  title: string;
  pubDate: string;
  categories: string[];
  content: string;
  thumbnail: string;
}

const BlogDetail: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<BlogDetailProps | null>();

  useEffect(() => {
    // Fetch data based on `slug`, possibly using an API to fetch blog details
    // Here, add your logic to fetch data or get it from state if available
  }, [slug]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-2">
          Published: {new Date(post.pubDate).toLocaleDateString()}
        </p>
        {post.categories?.length > 0 && (
          <p className="italic font-semibold text-indigo-600 mb-6">
            Categories: {post.categories.join(", ")}
          </p>
        )}
        {post.thumbnail && (
          <img
            src={post.thumbnail}
            alt={post.title}
            className="rounded-md mb-6"
          />
        )}
        <div
          className="prose text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
};

export default BlogDetail;
