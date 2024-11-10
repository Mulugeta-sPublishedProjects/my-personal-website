// components/ReceivedEventList.tsx
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Event {
  id: string;
  type: string;
  actor: {
    login: string;
    avatar_url: string;
  };
  repo: {
    name: string;
    url: string;
  };
  created_at: string;
  payload: any;
}

const ReceivedEventList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = `https://api.github.com/users/muleA/received_events`;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Network response was not ok");
        const data: Event[] = await response.json();
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
  if (events.length === 0) return <p>No events found.</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800 dark:text-gray-200">
      <h2 className="text-2xl font-bold mb-4">GitHub Events</h2>
      <ul className="space-y-4">
        {events.map((event) => (
          <li key={event.id} className="border-b pb-4 mb-4">
            <div className="flex items-center mb-2">
              <Image
                src={event.actor.avatar_url}
                alt={event.actor.login}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="ml-2 font-semibold">{event.actor.login}</span>
            </div>
            <h3 className="font-semibold">{event.type}</h3>
            <Link href={event.repo.url} passHref target="_blank">
              <p className="text-blue-600 dark:text-blue-400 hover:underline">
                {event.repo.name}
              </p>
            </Link>
            <p className="text-sm text-gray-500">
              {new Date(event.created_at).toLocaleString()}
            </p>
            {event.type === "ReleaseEvent" && (
              <div className="mt-2">
                <p>
                  <strong>Release:</strong> {event.payload.release.tag_name}
                </p>
                <Link
                  href={event.payload.release.html_url}
                  passHref
                  target="_blank"
                >
                  <span className="text-blue-600 dark:text-blue-400 hover:underline">
                    View Release Notes
                  </span>
                </Link>
              </div>
            )}
            {event.type === "CreateEvent" &&
              event.payload.ref_type === "repository" && (
                <p className="text-sm">Created a new repository</p>
              )}
            {event.type === "WatchEvent" && (
              <p className="text-sm">Starred the repository</p>
            )}
            {event.type === "ForkEvent" && (
              <p className="text-sm">Forked the repository</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReceivedEventList;
