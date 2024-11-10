// components/StarredList.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface StarredRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

const StarredList: React.FC = () => {
  const [starred, setStarred] = useState<StarredRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = `https://api.github.com/users/muleA/starred`;

  useEffect(() => {
    const fetchStarred = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Network response was not ok");
        const data: StarredRepo[] = await response.json();
        setStarred(data);
      } catch (error) {
        console.error("Failed to fetch starred repositories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStarred();
  }, [apiUrl]);

  if (loading) return <p>Loading...</p>;

  if (starred.length === 0) return <p>No starred repositories found.</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800 dark:text-gray-200">
      <h2 className="text-2xl font-bold mb-4">Starred Repositories</h2>
      <div className="grid grid-cols-1 gap-6">
        {starred.map((repo) => (
          <div
            key={repo.id}
            className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 shadow-md"
          >
            <h3 className="font-semibold text-lg mb-1">{repo.name}</h3>
            <p className="text-sm mb-3 text-gray-600 dark:text-gray-400">
              {repo.description || "No description available"}
            </p>
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-300 mb-2">
              <span>⭐ {repo.stargazers_count}</span>
              <span>🍴 {repo.forks_count}</span>
              {repo.language && <span>🖥 {repo.language}</span>}
            </div>
            <Link href={repo.html_url} passHref target="_blank">
              <div className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                View Repository
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarredList;
