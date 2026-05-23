# SynthFlow AI — Modern AI SaaS Landing Page

A high-impact **frontend portfolio project**: a polished AI SaaS marketing site with a **live interactive demo**, dark mode, and REST API integration.

Built by **Umar Shafeeq** for frontend internship applications.

## Live demo

Deploy to Vercel (free):

```bash
npm run build
# Push to GitHub, import on vercel.com
```

## Tech stack (matches CV skills)

| Skill | Used in project |
|-------|-----------------|
| Next.js 14 | App Router, API routes, metadata |
| React 18 | Components, composition |
| JavaScript ES6+ | No TypeScript |
| Tailwind CSS | Layout, dark mode, responsive design |
| React Hooks | `useState`, `useEffect` in demo & FAQ |
| Context API | Theme (light/dark) |
| Local Storage | Persist theme preference |
| REST API | `POST /api/generate` + `fetch()` |
| Git / Vercel | Version control & deployment |

## Features

- Hero with animated dashboard mockup
- Bento-grid features section
- **Live AI demo** — calls mock REST endpoint with loading & error states
- Pricing cards, testimonials, FAQ accordion
- Dark / light mode toggle
- Fully responsive (mobile-first)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  api/generate/route.js   # Mock REST API
  layout.js               # Theme provider + fonts
  page.js                 # Main landing page
components/
  layout/                 # Navbar, Footer
  sections/               # Hero, Features, Demo, etc.
  ui/                     # Button, Badge, Container
context/
  ThemeContext.js         # Dark mode + localStorage
lib/
  constants.js            # Site copy & data
```

## CV — how to list this project

**SynthFlow AI — SaaS Landing Page**  
*Next.js · React · JavaScript · Tailwind CSS · REST API*

- Built a responsive AI SaaS landing page with hero, bento features, pricing, and FAQ
- Integrated a live demo using Fetch API and a Next.js REST endpoint with loading/error UI
- Implemented dark mode with React Context API and Local Storage persistence
- Deployed on Vercel

## Interview talking points

1. **Why mock API?** Shows you understand REST flow (request → loading → JSON → UI) without needing paid AI keys. Easy to swap for a real provider later.
2. **Context vs props:** Theme is global; section data lives in `constants.js` for clean components.
3. **Performance:** Server components for static sections; `"use client"` only where interactivity is needed.
4. **Accessibility:** Semantic HTML, `aria-expanded` on FAQ, focus rings on buttons.

## License

MIT — free to use for your portfolio.
