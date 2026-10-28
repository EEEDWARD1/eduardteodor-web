import GitHubIcon from "@/app/components/icons/GitHubIcon";
import LinkedInIcon from "@/app/components/icons/LinkedInIcon";

export default function Hero() {
    return (
        <section className="mt-4">
            <h1 className="text-5xl font-bold tracking-tight decoration-[#FE5F55] decoration-4 underline underline-offset-8 sm:text-6xl">Hi, I&#39;m Ed.</h1>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-neutral-900">
                <p className="text-2xl">
                    I&#39;m a London-based First-Class Honours Computer Science graduate who enjoys turning ideas into practical, client-focused software and data-driven solutions.
                </p>
                <p>
                    I graduated from {" "}
                    <a className="font-bold underline" href="https://www.citystgeorges.ac.uk/" target="_blank" rel="noopener noreferrer">
                        City St George&#39;s, University of London
                    </a>. My interests span software, data analysis, automation and cloud technologies. I also take on freelance projects, helping individuals and businesses turn ideas into working solutions.
                </p>
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
