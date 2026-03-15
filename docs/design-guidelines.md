# Portfolio Design Guidelines

## Overview
Personal portfolio website for **Nguyen Ngoc Binh** — Senior Mobile Solution Developer with 10+ years experience, Graphic Design background, UX certification, and AI tools expertise.

## Brand Positioning
**"Senior Mobile Developer with Design DNA & AI-Forward Mindset"**

## Design Direction
- **Style:** Dark terminal-minimal with bento grid influences
- **Tone:** Professional, modern, tech-savvy yet creative
- **Primary theme:** Dark mode with light mode toggle support

## Color System

### Dark Theme (Primary)
| Token | Value | Usage |
|-------|-------|-------|
| bg-primary | #0A0F1C | Main background |
| bg-secondary | #1E293B | Card/section surfaces |
| bg-surface | #0F172A | Inset/nested surfaces |
| accent-cyan | #22D3EE | Primary accent, CTAs, links |
| accent-violet | #7C3AED | Secondary accent, highlights |
| text-primary | #FFFFFF | Headings |
| text-secondary | #94A3B8 | Body text |
| text-muted | #64748B | Captions, metadata |
| border-default | #0F172A | Subtle borders |
| success | #10B981 | Positive indicators |

### Accent Gradient
`linear-gradient(135deg, #22D3EE → #7C3AED)` — Used for CTAs, stat numbers, title accents.

## Typography

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display | Inter | 800 | 72px |
| Heading 1 | Inter | 700 | 36px |
| Heading 2 | Inter | 700 | 22-28px |
| Body | Inter | 400 | 16px |
| Code/Labels | JetBrains Mono | 500-600 | 11-14px |
| Stat Numbers | Inter | 800 | 48px |

## Spacing (8px grid)
4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96px

## Border Radius
sm: 6px · md: 12px · lg: 16px · xl: 24px · full: 100px (pills)

## Components

### 1. NavBar
Fixed top, glassmorphism backdrop-blur, logo "NB" gradient, nav links, theme toggle, Download CV CTA.

### 2. Button (Primary/Outline)
- Primary: gradient fill (cyan→violet), white text, radius-md
- Outline: cyan border, cyan text, transparent bg

### 3. Section Header
Gradient accent line (48×3px) + title (heading-1) + subtitle (body, text-secondary)

### 4. Skill Chip
Pill shape, bg-surface, border, icon + monospace label. Category colors: Mobile=#22D3EE, Architecture=#7C3AED, DevOps=#10B981.

### 5. Stat Card
Big gradient number (48px) + label below. bg-secondary, centered.

### 6. Timeline Item
Vertical cyan→violet gradient line, dot marker, year (mono uppercase), company, role, description.

### 7. Project Card
Image top (16:9), body with title, description, tech tags row. bg-secondary, radius-lg.

### 8. Certification Card
Logo placeholder + cert name + issuer/date + external link icon. Horizontal layout.

## Page Sections

1. **Hero** — Badge "Available for opportunities", name (72px), animated gradient title, tagline, 2 CTAs
2. **About** — Bio text + 4 stat cards (10+ years, 15+ apps, 6 certs, 99.9% crash-free)
3. **Experience** — Timeline with 4 roles (GHN, GoTyme, Cyberlogitec, early career)
4. **Tech Stack** — Categorized skill chips (Mobile, Architecture, DevOps & AI)
5. **Featured Projects** — 3 project cards (GHN Messaging, GoTyme Bank, VITS)
6. **Certifications** — 6 cert cards (Meta iOS, Meta RN, GCP, UX, Graphic Design, IT)
7. **Contact** — Form (name, email, message) + send button
8. **Footer** — Social icons (LinkedIn, GitHub, Mail, Phone) + copyright

## Design File
`design/my-porfolio-design.pen` — Contains all design tokens as variables, reusable components, and the full landing page layout.

## Responsive Strategy
- Mobile-first breakpoints: 375 · 768 · 1024 · 1440px
- Desktop design at 1440px (current)

## Key Differentiators
1. Design + Code: Graphic Design degree + UX cert + 10yr dev
2. Impact Metrics: 35% velocity, 70% deploy reduction, 99.9% crash-free
3. AI-Forward: Cursor, Claude, Gemini integration in workflow
4. Scale: 20K+ user real-time systems
