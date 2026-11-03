import type { Metadata } from "next";
import ProjectsSection from "@/app/components/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Eduard Teodor's projects.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="mt-4 mb-8 md:mt-8">
      <header className="max-w-4xl md:mx-3">
        <h1
          id="projects-page-heading"
          className="w-fit border-b-4 border-accent pb-2 text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          Things I&#39;ve built.
        </h1>
        <p className="mt-8 text-xl leading-relaxed font-normal md:text-2xl">
          A mix of personal projects, university work and things I&#39;ve built
          for clients.
        </p>
      </header>
      <ProjectsSection variant="full" />
    </div>
  );
}
