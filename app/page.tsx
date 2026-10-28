import Image from "next/image";
import Hero from "@/app/components/Hero";
import ProjectsSection from "@/app/components/ProjectsSection";
import ThoughtsSection from "@/app/components/ThoughtsSection";

export default function Home() {
  return (
    <div>
      <main>
          <Hero />
          <ProjectsSection />
          <ThoughtsSection />
      </main>
    </div>
  );
}
