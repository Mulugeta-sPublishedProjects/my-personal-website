"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

// Lightweight loading skeletons for better UX
const ExpertiseSkeleton = () => (
  <div className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/10">
    <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 md:mb-16">
        <Skeleton className="h-10 w-64 mx-auto mb-4" />
        <Skeleton className="h-6 w-96 mx-auto" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
        <Skeleton className="h-96" />
        <Skeleton className="h-96" />
      </div>
    </div>
  </div>
);

const ProjectsSkeleton = () => (
  <div className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/10">
    <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 md:mb-16">
        <Skeleton className="h-10 w-48 mx-auto mb-4" />
        <Skeleton className="h-6 w-96 mx-auto" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-80 rounded-2xl" />
        ))}
      </div>
    </div>
  </div>
);

const ContactSkeleton = () => (
  <div className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/10">
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <Skeleton className="h-10 w-80 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-32 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Dynamically import components that are not critical for initial render
// Using lighter loading options to reduce bundle size
export const Expertise = dynamic(
  () => import("@/components/sections/expertise").then((mod) => mod.Expertise),
  {
    loading: () => <ExpertiseSkeleton />,
    ssr: false,
  }
);

export const Projects = dynamic(
  () => import("@/components/sections/projects").then((mod) => mod.Projects),
  {
    loading: () => <ProjectsSkeleton />,
    ssr: false,
  }
);

export const Contact = dynamic(
  () => import("@/components/sections/contact").then((mod) => mod.Contact),
  {
    loading: () => <ContactSkeleton />,
    ssr: false,
  }
);
