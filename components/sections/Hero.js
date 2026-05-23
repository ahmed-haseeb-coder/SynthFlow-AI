import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-40" />

      <Container className="relative text-center">
        <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          <Badge className="mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            Now in public beta
          </Badge>
        </div>

        <h1
          className="animate-slide-up text-balance text-4xl font-extrabold tracking-tight opacity-0 sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <span className="gradient-text">{SITE.tagline}</span>
          <br />
          <span className="text-slate-900 dark:text-white">
            with AI that actually understands you
          </span>
        </h1>

        <p
          className="animate-slide-up mx-auto mt-6 max-w-2xl text-balance text-lg text-slate-600 opacity-0 dark:text-slate-400 sm:text-xl"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          {SITE.description}
        </p>

        <div
          className="animate-slide-up mt-10 flex flex-col items-center justify-center gap-4 opacity-0 sm:flex-row"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          <a href="#demo">
            <Button variant="primary" size="lg">
              Try live demo →
            </Button>
          </a>
          <a href="#features">
            <Button variant="secondary" size="lg">
              Explore features
            </Button>
          </a>
        </div>

        <div
          className="animate-slide-up relative mx-auto mt-16 max-w-4xl opacity-0"
          style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-brand-500/20 via-fuchsia-500/20 to-brand-500/20 blur-2xl" />
          <div className="glass-light relative overflow-hidden rounded-2xl border border-slate-200 shadow-2xl dark:border-white/10">
            <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3 dark:border-white/10">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-2 text-xs text-slate-500">dashboard.synthflow.ai</span>
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-3 sm:p-8">
              {[
                { label: "Words today", value: "2,847", change: "+12%" },
                { label: "Projects", value: "18", change: "Active" },
                { label: "Time saved", value: "6.2h", change: "This week" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-left dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-xs text-slate-500">{stat.label}</p>
                  <p className="mt-1 text-2xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    {stat.change}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
