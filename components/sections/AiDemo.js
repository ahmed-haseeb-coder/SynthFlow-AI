"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { DEMO_PROMPTS } from "@/lib/constants";

export default function AiDemo() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [meta, setMeta] = useState(null);

  const generate = async (text) => {
    const value = (text ?? prompt).trim();
    if (!value) {
      setError("Please enter a prompt first.");
      return;
    }

    setLoading(true);
    setError("");
    setOutput("");
    setMeta(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: value }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setOutput(data.output);
      setMeta({ tokens: data.tokens, model: data.model });
    } catch (err) {
      setError(err.message || "Failed to connect to API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="demo" className="section-padding">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            Live demo
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Try the AI writer — powered by REST API
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Uses <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm dark:bg-white/10">fetch()</code> +{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm dark:bg-white/10">POST /api/generate</code>{" "}
            with loading states and error handling.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-white/10 dark:bg-surface-card">
            <div className="border-b border-slate-200 px-4 py-3 dark:border-white/10">
              <div className="flex flex-wrap gap-2">
                {DEMO_PROMPTS.map((sample) => (
                  <button
                    key={sample}
                    type="button"
                    onClick={() => {
                      setPrompt(sample);
                      generate(sample);
                    }}
                    disabled={loading}
                    className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-600 transition hover:border-brand-500/50 hover:text-brand-600 disabled:opacity-50 dark:border-white/10 dark:text-slate-300 dark:hover:text-brand-400"
                  >
                    {sample.slice(0, 42)}…
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6">
              <label htmlFor="prompt" className="sr-only">
                Prompt
              </label>
              <textarea
                id="prompt"
                rows={3}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe what you want to generate…"
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white"
              />

              <div className="mt-4 flex items-center justify-between gap-4">
                <Button
                  variant="primary"
                  onClick={() => generate()}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Generating…
                    </>
                  ) : (
                    "Generate →"
                  )}
                </Button>
                {meta && (
                  <p className="text-xs text-slate-500">
                    {meta.model} · ~{meta.tokens} tokens
                  </p>
                )}
              </div>

              {error && (
                <p className="mt-4 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400">
                  {error}
                </p>
              )}

              {(output || loading) && (
                <div className="mt-6 rounded-xl border border-brand-500/20 bg-brand-500/5 p-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                    Output
                  </p>
                  {loading ? (
                    <div className="space-y-2">
                      <div className="h-3 w-full animate-pulse rounded bg-brand-500/20" />
                      <div className="h-3 w-4/5 animate-pulse rounded bg-brand-500/20" />
                      <div className="h-3 w-3/5 animate-pulse rounded bg-brand-500/20" />
                    </div>
                  ) : (
                    <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                      {output}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
