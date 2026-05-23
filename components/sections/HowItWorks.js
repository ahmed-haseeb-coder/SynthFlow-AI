import Container from "@/components/ui/Container";
import { STEPS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-white/[0.02]">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Three steps to better content
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {STEPS.map((item, index) => (
            <div key={item.step} className="relative">
              {index < STEPS.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-0.5 w-full translate-x-1/2 bg-gradient-to-r from-brand-500/50 to-transparent md:block" />
              )}
              <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-surface-card">
                <span className="text-4xl font-extrabold text-brand-500/30">{item.step}</span>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
