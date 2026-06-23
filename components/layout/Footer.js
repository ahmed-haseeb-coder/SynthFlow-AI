 import Container from "@/components/ui/Container";
import { SITE } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-surface-card">
      <Container className="section-padding !py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-fuchsia-500 text-xs font-bold text-white">
              S
            </span>
            <span className="font-semibold">{SITE.name}</span>
          </div>
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            Built by{" "}
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-600 hover:underline dark:text-brand-400"
            >
              {SITE.author}
            </a>{" "}
            — Frontend portfolio project · {year}
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="#features" className="hover:text-brand-600 dark:hover:text-brand-400">
              Features
            </a>
            <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 dark:hover:text-brand-400">
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
