import {socialLinks} from "@/app/data/social-links";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <footer className="mt-16 border-t border-neutral-200 px-6 py-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="m-0 text-sm text-neutral-600">© {currentYear} Eduard Teodor</p>
                <nav aria-label="Social links" className="flex gap-6">
                    {socialLinks.map(({label, href}) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                            {label}
                        </a>
                    ))}
                </nav>
            </div>
        </footer>
    )
}
