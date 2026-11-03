import Hero from "@/app/components/Hero";
import ProjectsSection from "@/app/components/ProjectsSection";
import ThoughtsSection from "@/app/components/ThoughtsSection";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <ProjectsSection limit={3} tagLimit={3} />
        <ThoughtsSection limit={3} />
      </main>
    </div>
  );
}
