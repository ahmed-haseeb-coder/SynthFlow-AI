import { NextResponse } from "next/server";

const RESPONSES = {
  "write a catchy hero headline for an ai saas product":
    "Ship AI-powered content 10× faster — without hiring a copy team.",
  "create a short welcome email for new users":
    "Hi there! Welcome to SynthFlow. You're one step away from smarter writing. Open your dashboard, pick a template, and generate your first draft in under 30 seconds.",
  "summarize benefits of using ai for content teams":
    "AI helps content teams move faster: instant first drafts, consistent brand voice, less writer's block, and more time for strategy and editing instead of staring at a blank page.",
};

const DEFAULT_RESPONSE =
  "SynthFlow AI helps teams create high-quality content in seconds. Describe your goal, pick a tone, and get polished copy ready to publish — built for marketers, founders, and developers who ship fast.";

export async function POST(request) {
  try {
    const body = await request.json();
    const prompt = (body.prompt || "").trim();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required." },
        { status: 400 }
      );
    }

    // Simulate network latency like a real API
    await new Promise((resolve) => setTimeout(resolve, 900 + Math.random() * 600));

    const key = prompt.toLowerCase();
    const matched = Object.entries(RESPONSES).find(([k]) =>
      key.includes(k.slice(0, 20))
    );
    const output = matched ? matched[1] : DEFAULT_RESPONSE;

    return NextResponse.json({
      success: true,
      output,
      tokens: Math.floor(output.split(" ").length * 1.3),
      model: "synthflow-mock-v1",
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }
}
