"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full mx-auto text-center p-6">
        <div className="mb-6">
          <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-6">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="flex items-center gap-2">
            <Link href="/">
              <Home className="size-4" />
              Go Home
            </Link>
          </Button>
          <button
            onClick={() => globalThis.history.back()}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-2"
          >
            <ArrowLeft className="size-4" />
            Go Back
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            Here are some helpful links:
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            <Link href="/" className="text-sm text-primary hover:underline">
              Home
            </Link>
            <Link
              href="/#projects"
              className="text-sm text-primary hover:underline"
            >
              Projects
            </Link>
            <Link
              href="/#about"
              className="text-sm text-primary hover:underline"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="text-sm text-primary hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
