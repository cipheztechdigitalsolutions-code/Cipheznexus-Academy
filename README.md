# CiphezNexus Academy

Production landing site for CiphezNexus Academy — "Stop Watching AI. Start Building It."

Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS · React Three Fiber**.

## Highlights
- **3D hero** (`components/Hero3D.tsx`) — a glowing, mouse-reactive agent/node network (icosahedron + particle field) via React Three Fiber. Lazy-loaded client-only (`ssr: false`), low-poly, capped DPR, desktop-only so mobile stays fast.
- **AI-style imagery** (`components/NeuralArt.tsx`) — self-contained SVG neural-network / circuit art in the navy/teal/gold palette (no external image requests, no CLS). Swap-in prompts for real raster AI images are noted in the file header.
- **Micro-interactions** — hover glows, scroll-reveal (`components/Reveal.tsx`, IntersectionObserver), floating chips, parallax hero. Respects `prefers-reduced-motion`.
- **SEO** — full metadata, OpenGraph, Twitter cards, viewport/theme-color in `app/layout.tsx`.
- Fully responsive, mobile-first.

## Brand system
Navy `#080A11` · Teal `#2DD4BF` · Gold `#F5C451` · Archivo (headings) · JetBrains Mono (labels).

## Components
`Nav` · `Hero3D` · `ProgramCard` · `ProcessStep` · `TestimonialCard` · `Footer` · `Reveal` · `NeuralArt`

## Develop
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy (Vercel)
Zero-config. Push to a Git repo and import into Vercel, or run `vercel`. Framework preset: **Next.js**.
