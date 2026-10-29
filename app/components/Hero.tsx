import GitHubIcon from "@/app/components/icons/GitHubIcon";
import LinkedInIcon from "@/app/components/icons/LinkedInIcon";

export default function Hero() {
  return (
    <section className="mt-4">
      <div className="ml-2 mr-2">
        <h1 className="text-5xl font-bold tracking-tight decoration-[#FE5F55] decoration-4 underline underline-offset-8 sm:text-6xl">
          Hi, I&#39;m Ed.
        </h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-neutral-900">
          <p className="text-2xl">
            I&#39;m a First-Class Honours Computer Science graduate with an
            interest in technology, data, business processes and building
            practical solutions.
          </p>
          <p className="text-base leading-7 text-zinc-900 md:text-lg">
            Based in London, I graduated from{" "}
            <a
              className="font-bold underline"
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
      <nav aria-label="Social profiles" className="mt-8 flex flex-wrap gap-3">
        <a
          href="https://github.com/EEEDWARD1"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
          className="inline-flex items-center gap-3 border px-4 py-3 text-slate-900 no-underline transition-colors hover:border-[#FE5F55] hover:bg-orange-50 hover:text-slate-900 hover:no-underline"
        >
          <GitHubIcon />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/eduardteodor"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
          className="inline-flex items-center gap-3 border px-4 py-3 text-slate-900 no-underline transition-colors hover:border-[#FE5F55] hover:bg-orange-50 hover:text-slate-900 hover:no-underline"
        >
          <LinkedInIcon />
          LinkedIn
        </a>
      </nav>
    </section>
  );
}
