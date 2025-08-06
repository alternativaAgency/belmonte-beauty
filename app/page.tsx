"use client";
import { NavigationMenuDemo } from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <NavigationMenuDemo />
      <main className="flex min-h-screen flex-col items-center justify-center px-4 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Welcome to the Platform
        </h1>
        <button
          onClick={() => document.documentElement.classList.toggle("dark")}
        >
          Toggle Theme
        </button>
        <p className="text-muted-foreground max-w-prose mb-8">
          Build scalable, authenticated, and elegant interfaces with Next.js and
          Tailwind v4.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/login">
            <Button variant="default">Log In</Button>
          </Link>
          <Link href="/about">
            <Button variant="outline">Learn More</Button>
          </Link>
        </div>
      </main>
    </>
  );
}
