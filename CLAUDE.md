# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

Greenfield: the repo currently contains only `PRD-clinica-alento.md` — the complete product spec. **Read the PRD before any implementation work.** It defines brand identity, page-by-page requirements, content, and phased development plan (section 8). This CLAUDE.md summarizes; the PRD is authoritative.

## What this is

Institutional website for **Clínica Alento**, a fictional multi-specialty clinic — a portfolio case for Evolux ("Automação de Processos" category). 5 pages: Home, Sobre Nós, Atendimentos, Blog (+ post pages), Contato. The site must *demonstrate* automation (animated bot widget, animated flows), not just describe it. All copy in Brazilian Portuguese.

Related sibling case for reference: `bravo_multimarcas` (match its Next.js major version). At the end, the hero screenshot goes into the Evolux site's `components/Services.tsx` card 03.

## Stack and commands

- **Next.js (App Router) + React 19 + Tailwind CSS v4** — once scaffolded: `npm run dev`, `npm run build`, `npm run lint`
- Animations: Motion (framer-motion) **or** pure IntersectionObserver — pick one in phase 1 and stay consistent
- **No database, no auth, no middleware.** Blog/content lives in static TS/MDX files (`lib/content.ts`, `content/posts/`)
- Contact form: server action that simulates processing (~1.2s delay) — the post-submit flow animation is the deliverable, not a real backend
- Images: downloaded to `public/images/` with semantic names (never hotlinked), served via `next/image`; fonts via `next/font`
- Deploy: Vercel

## Architecture highlights

- `components/shared/CareLine` — "a linha do cuidado": SVG path drawn on scroll (`stroke-dashoffset`), the brand signature element. Reused on Home (vertical, connecting sections), journey sections (horizontal, connecting step cards), footer, and Contato post-submit animation.
- `components/shared/BotWidget` — simulated WhatsApp conversation with typing indicator, looping; runs on Home hero and Contato. The exact conversation script is in PRD §5.1.a (the 22:47 timestamp is intentional).
- Build `CareLine` and `BotWidget` early (phase 2) — they are reused across every page.
- Suggested folder structure in PRD §7.

## Design system (enforce strictly)

- Palette tokens (PRD §2.3): `porcelain #FAF7F2` background (never pure `#FFF` as page bg), `sage-600 #4E8A6C` for CTAs/actions, `apricot #E8A87C` for warm accents only — **sage and apricot never share a component; apricot never on primary CTA**
- Fonts: Fraunces (display, sentence case only, one italic word per headline max), Inter (body), IBM Plex Mono (numbers/labels like `PASSO 01`, times, counters)
- Only dark sections: "Bastidores" on Home and Footer (`ink #233029`)
- Motion specs in PRD §2.7; **everything must respect `prefers-reduced-motion`** (static complete line, counters skip to final value, marquee off)

## Copy rules

- Tone: experienced nurse — calm, direct, short sentences. Forbidden words: "revolucionário", "disruptivo", "cuidando de você e da sua família"
- Technical automation vocabulary (n8n, RPA, integração) only in the "Bastidores" section and Evolux-signed content — never in patient-facing copy
- Case numbers for counters/copy in PRD §4.3 (40s response, -38% no-shows, 4.800/month, 92%, NPS 87)
- Footer must carry the disclaimer that the clinic is fictional (PRD §5.6)

## Non-functional requirements

- LCP < 2.5s; animate only `transform`/`opacity`/`stroke-dashoffset`
- AA contrast, full keyboard nav, `aria-live="polite"` on bot bubbles
- Per-page metadata + OpenGraph, `sitemap.xml`, JSON-LD `MedicalClinic` on home
- Mobile-first: journey goes vertical, bot widget becomes its own section below hero
- No Google Maps embed on Contato — stylized SVG map or facade photo instead
