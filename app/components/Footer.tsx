import {socialLinks} from "@/app/data/social-links";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <footer>
            {socialLinks.map(({label, href}) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                    {label}
                </a>
            ))}
            <div>
                <p>© {currentYear} Eduard Teodor</p>
            </div>
        </footer>
    )
}