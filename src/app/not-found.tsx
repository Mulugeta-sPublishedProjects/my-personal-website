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
          <Button
            variant="outline"
            onClick={() => globalThis.history.back()}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="size-4" />
            Go Back
          </Button>
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
