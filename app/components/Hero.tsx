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
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
                        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
                    </svg>
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/eduardteodor"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                    className="inline-flex items-center gap-3 border px-4 py-3 text-slate-900 no-underline transition-colors hover:border-[#FE5F55] hover:bg-orange-50 hover:text-slate-900 hover:no-underline"
                >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
                        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
                    </svg>
                    LinkedIn
                </a>
            </nav>
        </section>
    );
}
