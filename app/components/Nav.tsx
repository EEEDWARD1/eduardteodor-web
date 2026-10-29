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
  const isMenuOpen = menuOpen;

  return (
    <header className="my-4 border-neutral border text-slate-900">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between">
        <Link
          href="/"
          style={{ textDecoration: "none" }}
          className="border-r border-neutral-300 px-5 py-3 text-lg font-semibold tracking-tight text-slate-900 no-underline transition-colors hover:text-[#FE5F55] hover:no-underline"
        >
          Eduard Teodor
        </Link>
        <button
          type="button"
          className="mr-4 flex size-10 items-center justify-center border border-neutral-300 text-slate-900 transition duration-200 hover:bg-orange-50 active:scale-95 md:hidden"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span aria-hidden="true" className="flex w-5 flex-col gap-1">
            <span
              className={`h-0.5 w-full bg-current transition-transform duration-200 ease-out ${isMenuOpen ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-opacity duration-150 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-transform duration-200 ease-out ${isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`w-full flex-col overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out md:flex md:max-h-none md:w-auto md:flex-row md:items-center md:divide-x md:divide-neutral-300 md:overflow-visible md:opacity-100 ${isMenuOpen ? "visible flex max-h-48 border-t border-neutral-300 opacity-100" : "invisible flex max-h-0 border-t-0 opacity-0"} md:visible md:border-l md:border-neutral-300 md:border-t-0`}
        >
          {navItems.map((item) => {
            return (
              <Link
                key={item.link}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                style={{ textDecoration: "none" }}
                className="border-b border-neutral-200 px-5 py-3 font-medium text-slate-900 no-underline transition-colors hover:bg-orange-50 hover:text-[#FE5F55] hover:no-underline last:border-b-0 md:border-b-0 md:py-3"
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
