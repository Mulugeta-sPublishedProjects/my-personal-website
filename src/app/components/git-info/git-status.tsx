"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ChartTitle,
  Tooltip,
  Legend,
);

interface GitHubProfileData {
  login: string;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
  name: string;
  bio: string;
  location?: string;
  company?: string;
  created_at: string;
  twitter_username?: string;
}

const GitHubProfile: React.FC = () => {
  const [profile, setProfile] = useState<GitHubProfileData | undefined>();
  const [loading, setLoading] = useState(true);
  const apiUrl = `https://api.github.com/users/muleA`;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [apiUrl]);

  if (loading) return <p>Loading...</p>;
  if (!profile) return <p>Profile not found</p>;

  // Data for Bar Chart
  const data = {
    labels: ["Followers", "Following", "Public Repos"],
    datasets: [
      {
        label: "GitHub Profile Stats",
        data: [profile.followers, profile.following, profile.public_repos],
        backgroundColor: ["#FFE5EB", "#60A5FA", "#3B82F6"],
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Profile Stats" },
    },
  };

  return (
    <div className="flex items-start container mx-auto p-6">
      {/* Profile Card on the Left */}
      <div className="bg-white  rounded-lg dark:bg-gray-800 dark:text-gray-200 w-1/2 p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src={profile.avatar_url}
            alt="GitHub Avatar"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold">{profile.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              @{profile.login}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Link href={profile.html_url} passHref target="_blank">
              <button className="bg-primary-600 text-white py-2 px-4 rounded-lg transition-colors hover:bg-primary-700 text-center">
                GitHub Profile
              </button>
            </Link>
          </div>
        </div>

        <p className="mb-6">{profile.bio}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="font-semibold">Location:</p>
            <p>{profile.location ?? "Not provided"}</p>
          </div>
          <div>
            <p className="font-semibold">Company:</p>
            <p>{profile.company ?? "Not provided"}</p>
          </div>
          <div>
            <p className="font-semibold">Public Repos:</p>
            <p>{profile.public_repos}</p>
          </div>
          <div>
            <p className="font-semibold">Followers:</p>
            <p>{profile.followers}</p>
          </div>
          <div>
            <p className="font-semibold">Following:</p>
            <p>{profile.following}</p>
          </div>
        </div>
      </div>

      {/* Chart on the Right */}
      <div className="w-1/2 ml-6">
        <h3 className="text-xl font-bold mb-4">Profile Stats</h3>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default GitHubProfile;
