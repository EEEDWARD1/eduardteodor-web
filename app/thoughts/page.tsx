import type { Metadata } from "next";
import ThoughtsSection from "@/app/components/ThoughtsSection";

export const metadata: Metadata = {
  title: "Thoughts",
  description: "Explore Eduard Teodor's thoughts.",
  alternates: { canonical: "/thoughts" },
};

export default function ThoughtsPage() {
  return (
    <div className="mt-4 mb-8 md:mt-8">
      <header className="max-w-4xl md:mx-3">
        <h1
          id="thoughts-page-heading"
          className="w-fit border-b-4 border-accent pb-2 text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          Things I&#39;ve learned.
        </h1>
        <p className="mt-8 text-xl leading-relaxed font-normal md:text-2xl">
          A collection of things I&#39;ve learned, built, broken and figured out
          along the way.
        </p>
      </header>
      <ThoughtsSection variant="full" />
    </div>
  );
}
