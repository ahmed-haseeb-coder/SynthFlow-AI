"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useTheme } from "@/context/ThemeContext";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-surface-dark/80">
      <Container className="flex h-16 items-center justify-between sm:h-[4.5rem]">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-fuchsia-500 text-sm font-bold text-white shadow-lg shadow-brand-500/30">
            S
          </span>
          <span className="text-lg font-bold tracking-tight">{SITE.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {mounted && (
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-lg transition hover:bg-slate-100 dark:border-white/10 dark:hover:bg-white/10"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          )}
          <Button
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
          >
            Try demo
          </Button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 md:hidden dark:border-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden dark:border-white/10 dark:bg-surface-card">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="primary"
            size="sm"
            className="mt-3 w-full"
            onClick={() => {
              setOpen(false);
              document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Try demo
          </Button>
        </div>
      )}
    </header>
  );
}
