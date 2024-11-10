// components/FollowerList.tsx
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Follower {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

const FollowerList: React.FC = () => {
  const [followers, setFollowers] = useState<Follower[]>([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = `https://api.github.com/users/muleA/followers`;

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Network response was not ok");
        const data: Follower[] = await response.json();
        setFollowers(data);
      } catch (error) {
        console.error("Failed to fetch followers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFollowers();
  }, [apiUrl]);

  if (loading) return <p>Loading...</p>;
  if (followers.length === 0) return <p>No followers found.</p>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800 dark:text-gray-200">
      <h2 className="text-2xl font-bold mb-4">Followers</h2>
      <div className="grid grid-cols-2 gap-4">
        {followers.map((follower) => (
          <div
            key={follower.id}
            className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center text-center shadow-md"
          >
            <Image
              src={follower.avatar_url}
              alt={`${follower.login}'s avatar`}
              width={80}
              height={80}
              className="rounded-full mb-3"
            />
            <h3 className="font-semibold">{follower.login}</h3>
            <Link href={follower.html_url} passHref target="_blank">
              <div className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                View Profile
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowerList;
