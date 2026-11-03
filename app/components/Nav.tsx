"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", link: "/" },
  { label: "Projects", link: "/projects" },
  { label: "Thoughts", link: "/thoughts" },
  { label: "Contact", link: "/contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="my-4 rounded-none border border-border text-foreground">
      <div className="flex w-full flex-wrap items-stretch justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="flex min-h-11 items-center border-r border-border px-4 text-lg font-semibold
          tracking-tight no-underline! transition-colors hover:text-accent"
          onClick={() => setMenuOpen(false)}
        >
          Eduard Teodor
        </Link>
        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center border-l border-border transition-colors hover:bg-orange-50 md:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span aria-hidden="true" className="flex w-5 flex-col gap-1">
            <span
              className={`h-0.5 w-full bg-current transition-transform duration-200 ${
                menuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-opacity duration-150 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-transform duration-200 ${
                menuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`flex w-full flex-col divide-y divide-border overflow-hidden transition-[max-height,opacity]
          duration-300 ease-in-out
          md:visible md:max-h-none md:w-auto md:flex-row md:items-stretch
          md:divide-x md:divide-y-0 md:overflow-visible md:border-t-0
          md:border-l md:border-border md:opacity-100
          ${
            menuOpen
              ? "visible max-h-48 border-t border-border opacity-100"
              : "invisible max-h-0 opacity-0"
          }`}
        >
          {navItems.map((item) => {
            const isActive =
              pathname === item.link ||
              ((item.link === "/projects" || item.link === "/thoughts") &&
                pathname.startsWith(`${item.link}/`));
            return (
              <Link
                key={item.link}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`flex min-h-11 items-center justify-center rounded-none px-4 py-2.5
                no-underline! transition-colors hover:bg-orange-50 hover:text-accent
                focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent
                md:w-24 md:min-w-24 ${
                  isActive
                    ? "bg-orange-50 font-semibold text-accent"
                    : "font-medium text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
