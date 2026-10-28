const technologies = [
    { name: "ASP.NET Core", href: "https://learn.microsoft.com/aspnet/core/" },
    { name: "Next.js", href: "https://nextjs.org/" },
    { name: "Python", href: "https://www.python.org/" },
];
export default function Hero() {
    return (
        <section>
            <h1>Hi, I&#39;m Ed.</h1>
            <p>
                I live in London, United Kingdom, and I am a recent First Class Hons Computer Science graduate from{" "}
                <a href="https://www.citystgeorges.ac.uk/" target="_blank" rel="noopener noreferrer">City St George&#39;s, University of London</a>.
            </p>
            <p>
                I love programming and building thoughtful, client-first solutions.
                I also take on freelance projects from time to time.
            </p>
            <p>Lately, I’ve been enjoying:{" "}</p>
            <ul>
                {technologies.map((technology) => (
                    <li key={technology.name}>
                        <a
                            href={technology.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {technology.name}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}