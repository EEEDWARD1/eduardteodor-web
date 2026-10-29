import GitHubIcon from "@/app/components/icons/GitHubIcon";
import LinkedInIcon from "@/app/components/icons/LinkedInIcon";

export default function Hero() {
  return (
    <section className="mt-4 md:mt-8">
      <div className="max-w-4xl md:mx-3">
        {/* Heading */}
        <h1
          className="w-fit border-b-4 border-accent pb-2 text-5xl font-bold tracking-tight
        text-foreground sm:text-6xl md:text-7xl"
        >
          Hi, I&#39;m Ed.
        </h1>
        <div className="mt-8 space-y-5">
          <p className="text-xl leading-relaxed font-medium md:text-2xl">
            I&#39;m a First-Class Honours Computer Science graduate with an
            interest in technology, data, business processes and building
            practical solutions.
          </p>
          <p className="text-base leading-relaxed text-neutral-800 md:text-lg">
            Based in London, I graduated from{" "}
            <a
              className="underline decoration-neutral-400 underline-offset-4 transition-colors hover:text-accent"
              href="https://www.citystgeorges.ac.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              City, University of London
            </a>
            . I also work with clients on freelance projects, turning
            requirements into working solutions.
          </p>
        </div>
      </div>
      <nav
        aria-label="Social profiles"
        className="mt-4 md:mt-8 flex flex-wrap gap-3"
      >
        <a
          href="https://github.com/EEEDWARD1"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
          className="flex items-center gap-2 border border-neutral-400 px-4 py-2 text-sm font-medium
          text-foreground transition-colors hover:border-accent hover:bg-orange-50
          hover:text-accent"
        >
          <GitHubIcon />
          <span className="hidden md:inline">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/eduardteodor"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
          className="flex items-center gap-2 border border-neutral-400 px-4 py-2 text-sm font-medium
          text-foreground transition-colors hover:border-accent hover:bg-orange-50
          hover:text-accent"
        >
          <LinkedInIcon />
          <span className="hidden md:inline">LinkedIn</span>
        </a>
      </nav>
    </section>
  );
}
