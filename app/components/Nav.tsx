'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";

const navItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
]

export default function Nav(){
    const pathname = usePathname();
    return(
        <header>
            <div>
                {/* Links to home page */}
                <Link href="/">
                    Eduard Teodor
                </Link>
                {/* Text Links */}
                <nav>
                    {navItems.map((item) => {
                        return(
                            <Link key={item.link} href={item.link}>
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    )
}