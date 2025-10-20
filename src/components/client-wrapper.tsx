"use client";

import dynamic from "next/dynamic";

// Dynamically import components that are not critical for initial render
export const Expertise = dynamic(
  () => import("@/components/sections/expertise").then((mod) => mod.Expertise),
  {
    loading: () => (
      <div className="py-16 text-center">Loading expertise section...</div>
    ),
    ssr: false,
  }
);

export const Projects = dynamic(
  () => import("@/components/sections/projects").then((mod) => mod.Projects),
  {
    loading: () => (
      <div className="py-16 text-center">Loading projects section...</div>
    ),
    ssr: false,
  }
);

export const Contact = dynamic(
  () => import("@/components/sections/contact").then((mod) => mod.Contact),
  {
    loading: () => (
      <div className="py-16 text-center">Loading contact section...</div>
    ),
    ssr: false,
  }
);
