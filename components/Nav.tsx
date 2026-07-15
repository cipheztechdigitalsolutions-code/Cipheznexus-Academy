"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#programs", label: "Programs" },
  { href: "#about", label: "About" },
  { href: "#wins", label: "Student Wins" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-night/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="text-lg font-extrabold tracking-tight text-ink">
            CiphezNexus
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-teal">
            Academy
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-teal px-5 py-2 text-sm font-semibold text-night transition-all hover:glow-teal hover:brightness-110"
          >
            Enroll
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-ink md:hidden"
        >
          <span className="text-xl leading-none">{open ? "×" : "≡"}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-night/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-teal px-5 py-2 text-center text-sm font-semibold text-night"
            >
              Enroll
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
