export const SITE = {
  name: "SynthFlow AI",
  tagline: "Write smarter. Ship faster.",
  description:
    "AI-powered content workspace for teams. Generate copy, summarize docs, and automate workflows — all in one beautiful dashboard.",
  github: "https://github.com/ahmed-haseeb-coder",
  author: "Ahmed Haseeb",
};

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Demo", href: "#demo" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const STATS = [
  { value: "10K+", label: "Active users" },
  { value: "2M+", label: "Words generated" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9★", label: "User rating" },
];

export const FEATURES = [
  {
    title: "Smart Writing Assistant",
    description:
      "Generate blog posts, emails, and ad copy in seconds with context-aware AI suggestions.",
    icon: "✨",
    span: "col-span-1 md:col-span-2",
    highlight: true,
  },
  {
    title: "Team Workspaces",
    description: "Collaborate in real time with shared projects and role-based access.",
    icon: "👥",
    span: "col-span-1",
  },
  {
    title: "REST API Ready",
    description: "Integrate SynthFlow into your stack with simple JSON endpoints.",
    icon: "🔌",
    span: "col-span-1",
  },
  {
    title: "Templates Library",
    description: "50+ pre-built templates for marketing, support, and product teams.",
    icon: "📋",
    span: "col-span-1",
  },
  {
    title: "Analytics Dashboard",
    description: "Track usage, token spend, and team productivity from one place.",
    icon: "📊",
    span: "col-span-1 md:col-span-2",
  },
];

export const STEPS = [
  {
    step: "01",
    title: "Describe your goal",
    description: "Tell SynthFlow what you need — a landing page hero, email, or product description.",
  },
  {
    step: "02",
    title: "AI generates drafts",
    description: "Our engine returns polished copy you can edit, refine, or regenerate instantly.",
  },
  {
    step: "03",
    title: "Export & ship",
    description: "Copy to clipboard, download as Markdown, or push to your CMS via API.",
  },
];

export const PRICING = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for learning and side projects.",
    features: [
      "500 words / day",
      "3 templates",
      "Community support",
      "Basic export",
    ],
    cta: "Get started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/ month",
    description: "For freelancers and growing teams.",
    features: [
      "Unlimited generations",
      "All templates",
      "Priority support",
      "API access",
      "Team workspaces",
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For companies with advanced needs.",
    features: [
      "SSO & audit logs",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "SynthFlow cut our content production time in half. The UI feels premium and the API was easy to wire up.",
    author: "Sarah Khan",
    role: "Marketing Lead, TechStart",
    avatar: "SK",
  },
  {
    quote:
      "As a frontend dev, I appreciate how fast and responsive the demo is. Clean React patterns throughout.",
    author: "Ahmed Raza",
    role: "Frontend Developer",
    avatar: "AR",
  },
  {
    quote:
      "We replaced three tools with one dashboard. The dark mode and mobile layout are flawless.",
    author: "Fatima Ali",
    role: "Product Manager",
    avatar: "FA",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Is SynthFlow a real product?",
    answer:
      "This is a frontend portfolio project that simulates a SaaS landing page. The AI demo uses a mock REST API built with Next.js — perfect for showcasing UI and API integration skills.",
  },
  {
    question: "What tech stack was used?",
    answer:
      "Next.js 14, React 18, JavaScript (ES6+), Tailwind CSS, React Hooks, Context API, Local Storage, and the Fetch API for REST integration.",
  },
  {
    question: "Can I use a real AI API?",
    answer:
      "Yes. The /api/generate route can be swapped for OpenAI, Hugging Face, or any REST provider. The frontend already handles loading, errors, and JSON responses.",
  },
  {
    question: "Is the project responsive?",
    answer:
      "Absolutely. Every section is mobile-first with breakpoints for tablet and desktop, including the interactive demo and pricing cards.",
  },
];

export const DEMO_PROMPTS = [
  "Write a catchy hero headline for an AI SaaS product",
  "Create a short welcome email for new users",
  "Summarize benefits of using AI for content teams",
];
