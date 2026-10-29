import { socialLinks } from "@/app/data/social-links";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="mt-12 flex flex-wrap items-center
    justify-between gap-3 border-t border-neutral-300
    py-4 text-sm text-neutral-600"
    >
      <p className="">© {currentYear} Eduard Teodor</p>
      <nav
        aria-label="Social links"
        className="flex flex-wrap items-center gap-4"
      >
        {socialLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-neutral-700 no-underline transition-colors hover:text-accent"
          >
            {label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
