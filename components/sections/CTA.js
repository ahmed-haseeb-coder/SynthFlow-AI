import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="section-padding">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-fuchsia-700 px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to ship content 10× faster?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-brand-100">
              Join thousands of teams using {SITE.name}. Start free — no credit card required.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#demo">
                <Button
                  variant="secondary"
                  size="lg"
                  className="!border-white/20 !bg-white !text-brand-700 hover:!bg-brand-50"
                >
                  Try the demo
                </Button>
              </a>
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="lg"
                  className="!text-white hover:!bg-white/10"
                >
                  View on GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
