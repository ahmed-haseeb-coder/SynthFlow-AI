import Container from "@/components/ui/Container";
import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <section className="border-y border-slate-200 bg-slate-50/50 dark:border-white/10 dark:bg-white/[0.02]">
      <Container className="py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold gradient-text sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
