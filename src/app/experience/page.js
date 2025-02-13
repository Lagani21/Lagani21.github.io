"use client";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";

export default function Experience() {
  return (
    <PageWrapper>
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-6xl font-extrabold">💼 Experience</h1>
        <p className="text-xl mt-4">
          Data Scientist at NC Museum of Natural Sciences. Working on AI-driven wildlife monitoring.
        </p>
        <Link href="/" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg">
          ← Back to Home
        </Link>
      </div>
    </PageWrapper>
  );
}
