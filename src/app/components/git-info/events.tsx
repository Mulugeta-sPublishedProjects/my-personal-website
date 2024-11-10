/* eslint-disable unicorn/prevent-abbreviations */
// components/EventList.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

interface GitHubEvent {
  id: string;
  type: string;
  actor: {
    id: number;
    login: string;
    avatar_url: string;
  };
  repo: {
    id: number;
    name: string;
    url: string;
  };
  payload: {
    ref: string | null;
    ref_type?: string;
    commits?: {
      sha: string;
      message: string;
      url: string;
      author: {
        name: string;
      };
    }[];
  };
  created_at: string;
}

const EventList: React.FC = () => {
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = `https://api.github.com/users/muleA/events`;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Network response was not ok");
        const data: GitHubEvent[] = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, [apiUrl]);

  if (loading) return <p>Loading...</p>;
  if (events.length === 0) return <p>No recent events found.</p>;

  // Prepare data for the chart
  const eventTypeCounts = events.reduce(
    (acc, event) => {
      acc[event.type] = (acc[event.type] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const chartData = {
    labels: Object.keys(eventTypeCounts),
    datasets: [
      {
        label: "Event Count",
        data: Object.values(eventTypeCounts),
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
        text: "GitHub Event Types",
      },
    },
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800 dark:text-gray-200">
      <h2 className="text-2xl font-bold mb-4">Recent Events</h2>

      {/* Chart Section */}
      <div className="mb-6">
        <Bar data={chartData} options={chartOptions} />
      </div>

      <ul className="space-y-4">
        {events.map((event) => (
          <li
            key={event.id}
            className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md"
          >
            <div className="flex items-center space-x-4">
              <Image
                height={40}
                width={40}
                src={event.actor.avatar_url}
                alt={event.actor.login}
                className="rounded-full"
              />
              <div>
                <p className="text-lg font-semibold">{event.actor.login}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {new Date(event.created_at).toLocaleString()}
                </p>
              </div>
            </div>
            <div className="mt-2">
              {event.type === "CreateEvent" && (
                <p>
                  Created {event.payload.ref_type}{" "}
                  <span className="font-semibold">{event.payload.ref}</span> in
                  repository{" "}
                  <Link
                    href={event.repo.url
                      .replace("api.", "")
                      .replace("/repos", "")}
                    passHref
                    target="_blank"
                  >
                    <span className="text-blue-600 dark:text-blue-400 hover:underline">
                      {event.repo.name}
                    </span>
                  </Link>
                </p>
              )}
              {event.type === "PushEvent" && event.payload.commits && (
                <div>
                  <p>
                    Pushed to{" "}
                    <span className="font-semibold">{event.repo.name}</span>
                  </p>
                  <ul className="mt-2 space-y-1">
                    {event.payload.commits.map((commit) => (
                      <li key={commit.sha}>
                        <Link href={commit.url} passHref target="_blank">
                          <span className="text-blue-600 dark:text-blue-400 hover:underline">
                            {commit.sha.slice(0, 7)} - {commit.message}
                          </span>
                        </Link>{" "}
                        by {commit.author.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
