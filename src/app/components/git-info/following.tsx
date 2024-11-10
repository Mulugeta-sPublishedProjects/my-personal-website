// components/FollowingList.tsx
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FollowingUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

const FollowingList: React.FC = () => {
  const [following, setFollowing] = useState<FollowingUser[]>([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = `https://api.github.com/users/muleA/following`;

  useEffect(() => {
    const fetchFollowing = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Network response was not ok");
        const data: FollowingUser[] = await response.json();
        setFollowing(data);
      } catch (error) {
        console.error("Failed to fetch following:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFollowing();
  }, [apiUrl]);

  if (loading) return <p>Loading...</p>;

  if (following.length === 0) return <p>No users found.</p>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800 dark:text-gray-200">
      <h2 className="text-2xl font-bold mb-4">Following</h2>
      <div className="grid grid-cols-2 gap-4">
        {following.map((user) => (
          <div
            key={user.id}
            className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center text-center shadow-md"
          >
            <Image
              src={user.avatar_url}
              alt={`${user.login}'s avatar`}
              width={80}
              height={80}
              className="rounded-full mb-3"
            />
            <h3 className="font-semibold">{user.login}</h3>
            <Link href={user.html_url} passHref target="_blank">
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

export default FollowingList;
