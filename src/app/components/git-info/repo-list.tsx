/* eslint-disable unicorn/prevent-abbreviations */
// components/RepoList.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface Repo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

const RepoList: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = `https://api.github.com/users/muleA/repos`;

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Network response was not ok");
        const data: Repo[] = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Failed to fetch repositories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, [apiUrl]);

  if (loading) return <p>Loading...</p>;
  if (repos.length === 0) return <p>No repositories found.</p>;

  // Prepare data for the chart (stars, forks, and languages)
  const languageCounts = repos.reduce(
    (acc, repo) => {
      const language = repo.language || "Unknown";
      acc[language] = (acc[language] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const chartData = {
    labels: Object.keys(languageCounts),
    datasets: [
      {
        label: "Language Distribution",
        data: Object.values(languageCounts),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Repository Language Distribution",
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800 dark:text-gray-200">
      <h2 className="text-2xl font-bold mb-4">Repositories</h2>

      {/* Flexbox layout with two columns */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - Repository List */}
        <div className="md:w-1/2">
          <ul className="space-y-4">
            {repos.map((repo) => (
              <li key={repo.id} className="border-b pb-4 mb-4">
                <Link href={repo.html_url} passHref target="_blank">
                  <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-400 hover:underline cursor-pointer">
                    {repo.full_name}
                  </h3>
                </Link>
                <p className="text-sm">
                  {repo.description || "No description provided."}
                </p>
                <div className="mt-2 text-sm flex justify-between">
                  <span>Stars: {repo.stargazers_count}</span>
                  <span>Forks: {repo.forks_count}</span>
                  <span>Language: {repo.language || "Not specified"}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Chart */}
        <div className="md:w-1/2 flex justify-center items-center">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default RepoList;
