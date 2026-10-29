"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Contact", link: "/contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="my-4 border border-neutral-400 text-foreground">
      <div className="flex w-full flex-wrap items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="border-r border-neutral-300 px-5 py-1.5 text-lg font-semibold
          tracking-tight no-underline transition-colors hover:text-accent"
          onClick={() => setMenuOpen(false)}
        >
          Eduard Teodor
        </Link>
        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border-l border-neutral-300 transition-colors hover:bg-orange-50 md:hidden"
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
          className={`w-full flex-col overflow-hidden transition-[max-height,opacity]
          duration-300 ease-in-out border-l
          md:visible md:flex md:max-h-none md:w-auto md:flex-row md:items-stretch
          md:divide-x md:divide-neutral-300 md:overflow-visible md:border-t-0
          md:border-l md:border-neutral-300 md:opacity-100
          ${
            menuOpen
              ? "visible flex max-h-48 border-t border-neutral-300 opacity-100"
              : "invisible flex max-h-0 opacity-0"
          }`}
        >
          {navItems.map((item) => {
            return (
              <Link
                key={item.link}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                style={{ textDecoration: "none" }}
                className="flex items-center border-b border-neutral-200 px-5 py-2.5
                font-medium text-foreground no-underline transition-colors
                hover:bg-orange-50 hover:text-accent
                md:border-b-0"
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
