# Rohit More — Portfolio (Next.js + Tailwind)

A fast, animated, and modern portfolio built with Next.js (App Router), Tailwind CSS, Framer Motion, and next-themes.

## Features

- **Elegant design** with glassmorphism cards and gradient accents
- **Framer Motion animations** across sections
- **Interactive cursor glow** background effect
- **Dark/Light theme** toggle (system-aware)
- **Responsive** and accessible
- **Content-driven** via `src/lib/data.ts`

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Customize Content

- Update profile, skills, experience and projects in:
  - `src/lib/data.ts`
- Edit sections/components:
  - `src/components/Hero.tsx`
  - `src/components/Skills.tsx`
  - `src/components/Experience.tsx`
  - `src/components/Projects.tsx`
  - `src/components/Contact.tsx`
- Change colors, fonts, and effects in:
  - `tailwind.config.ts`
  - `src/app/globals.css`

## Build

```bash
npm run build
npm start
```

## Deploy

- Easiest: push to GitHub and import the repo in [Vercel](https://vercel.com).
- Vercel auto-detects Next.js and sets correct build command: `npm run build` and output: `.next`.

## Notes

- If you have a public PDF resume, add its URL at `links.resume` in `src/lib/data.ts` so the "View Resume" button opens it.
- Icons are provided by `lucide-react`. You can swap or add social icons in `src/components/Navbar.tsx`.
