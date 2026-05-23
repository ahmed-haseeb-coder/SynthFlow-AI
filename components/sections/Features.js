import Container from "@/components/ui/Container";
import { FEATURES } from "@/lib/constants";

export default function Features() {
  return (
    <section id="features" className="section-padding">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to ship content faster
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            A modern bento-style layout showcasing product capabilities — built with responsive CSS Grid.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className={`group rounded-2xl border border-slate-200 p-6 transition duration-300 hover:border-brand-500/40 hover:shadow-lg hover:shadow-brand-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.05] ${feature.span} ${
                feature.highlight
                  ? "md:bg-gradient-to-br md:from-brand-500/10 md:to-fuchsia-500/5"
                  : ""
              }`}
            >
              <span className="text-3xl">{feature.icon}</span>
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
