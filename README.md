<div align="center">

# Saad Nadeem

### DevOps & Cloud Engineer

Building reliable cloud-native systems on Kubernetes & AWS

A single-page portfolio showcasing work in full-stack development, DevOps automation, and cloud-native deployments. Built on a modern React + Vite stack and continuously deployed to AWS.

[![Live](https://img.shields.io/badge/Live-saadnadeem.com-7B61FF?style=for-the-badge&logo=vercel&logoColor=white)](https://saadnadeem.com)
[![Deploy](https://github.com/Saadnadeem07/saadnadeem.com/actions/workflows/deploy.yml/badge.svg)](https://github.com/Saadnadeem07/saadnadeem.com/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)

</div>

---

## Tech Stack

<div align="center">

**Core**

![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=000)
![TypeScript](https://img.shields.io/badge/TypeScript_6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**Libraries**

![Lucide](https://img.shields.io/badge/lucide--react-F56565?style=for-the-badge&logo=lucide&logoColor=white)
![Simple Icons](https://img.shields.io/badge/simple--icons-111111?style=for-the-badge&logo=simpleicons&logoColor=white)
![React Scroll](https://img.shields.io/badge/react--scroll-61DAFB?style=for-the-badge&logo=react&logoColor=000)

**Infrastructure**

![AWS](https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazonwebservices&logoColor=white)
![Amazon S3](https://img.shields.io/badge/Amazon_S3-569A31?style=for-the-badge&logo=amazons3&logoColor=white)
![CloudFront](https://img.shields.io/badge/CloudFront-FF9900?style=for-the-badge&logo=amazoncloudfront&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js_24_LTS-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

</div>

---

## Highlights

- **Single-page application** with smooth-scroll navigation, active-link spy, and a fixed translucent navbar that reveals on scroll.
- **One layout rail** — every section renders through a shared `Container` and `Section` pair, so the page max-width is defined in exactly one place.
- **Brand-accurate visuals** — skill pills and project hero cards compose official brand SVGs from the [simple-icons](https://simpleicons.org) collection at build time. No raster screenshots, no external CDN dependencies.
- **No JS animation library** — entry transitions use a 30-line `IntersectionObserver` hook + CSS keyframes. `prefers-reduced-motion` honored.
- **Continuous deployment** — every push to `main` builds, syncs to S3 with split cache headers (immutable for hashed assets, no-cache for HTML), and invalidates CloudFront.

---

## Sections

| # | Section | Notes |
|---|---|---|
| 1 | **Hero** | Name, tagline, profile photo, six colored CTAs, animated gradient orbs |
| 2 | **Services** | Three cards: Full-Stack Development · DevOps & Automation · Cloud-Native Deployments |
| 3 | **Projects** | Six cards with programmatically-rendered brand-logo hero visuals |
| 4 | **Experience & Education** | Vertical timeline (FAST NUCES + NeuroAssess FYP) |
| 5 | **Skills** | Six category tabs with brand-icon pills |
| 6 | **Certifications** | 2×2 grid (IBM DevOps · Git on Udemy · Google Prompting · Google AI Essentials) |
| 7 | **Contact** | Intro card, four contact cards (email, phone, GitHub, LinkedIn), form with `mailto:` fallback |
| 8 | **Footer** | Brand, tagline, socials, sitemap, back-to-top |

---

## Architecture

```
sn-portfolio/
├── .github/workflows/deploy.yml         CI: build → S3 sync → CloudFront invalidation
├── index.html                           Vite entry · full SEO/OG/Twitter metadata
├── vite.config.ts                       React + Tailwind plugin
├── tsconfig.json                        TS 6 · strict · ES2020 · bundler resolution
├── public/
│   ├── favicon.svg                      Inline SN monogram
│   ├── images/profile.jpeg
│   ├── resume.pdf
│   └── robots.txt
└── src/
    ├── main.tsx                         React 19 createRoot
    ├── App.tsx                          22-line composition root
    ├── index.css                        Tailwind 4 import + @theme tokens + keyframes
    ├── vite-env.d.ts
    ├── data/
    │   ├── profile.ts                   Name · titles · email · phone · socials
    │   ├── projects.ts                  6 projects + visual config (icons + gradient)
    │   ├── skills.ts                    Skills + categories
    │   ├── services.ts                  3 service cards
    │   ├── experience.ts                Timeline entries
    │   ├── certifications.ts            Cert list
    │   └── nav.ts                       Nav-link order
    ├── components/
    │   ├── layout/
    │   │   ├── Container.tsx            ← single max-width rail
    │   │   ├── Section.tsx              ← <section> + Container + spacing
    │   │   ├── Navbar.tsx               ← sticky · scroll-spy · mobile menu
    │   │   └── SocialIcons.tsx
    │   ├── sections/
    │   │   ├── Hero.tsx
    │   │   ├── Services.tsx
    │   │   ├── Projects.tsx
    │   │   ├── Experience.tsx
    │   │   ├── Skills.tsx
    │   │   ├── Certifications.tsx
    │   │   ├── Contact.tsx
    │   │   └── Footer.tsx
    │   ├── icons/BrandIcons.tsx         GitHub · LinkedIn · Medium (handwritten)
    │   └── ProjectVisual.tsx            Composed project hero (logo + gradient)
    └── lib/
        ├── useReveal.ts                 IntersectionObserver fade-in hook
        └── skillIcons.tsx               simple-icons → SkillIcon mapping
```

---

## Deployment Pipeline

```
   push: main
       │
       ▼
  ┌────────────────────────┐
  │  GitHub Actions        │   actions/checkout · setup-node@22 · npm ci · npm run build
  └────────────────────────┘
              │
              ▼
  ┌────────────────────────┐
  │  Amazon S3             │   sync ./dist
  │  s3://saadnadeem.com   │   · hashed assets:     Cache-Control: max-age=31536000, immutable
  └────────────────────────┘   · HTML / robots:     Cache-Control: max-age=0, must-revalidate
              │
              ▼
  ┌────────────────────────┐
  │  Amazon CloudFront     │   create-invalidation --paths "/*"
  │  + ACM (us-east-1)     │
  └────────────────────────┘
              │
              ▼
   https://saadnadeem.com
```

### Required CI secrets

| Secret | Purpose |
|---|---|
| `AWS_ACCESS_KEY_ID` | IAM key with `s3:PutObject`, `s3:DeleteObject`, `s3:ListBucket` on the bucket and `cloudfront:CreateInvalidation` on the distribution |
| `AWS_SECRET_ACCESS_KEY` | Matching secret access key |
| `AWS_REGION` | Bucket region (e.g. `us-east-1`) |
| `CLOUDFRONT_DISTRIBUTION_ID` | Distribution in front of the bucket |

---

## Quality Bar

| | |
|---|---|
| **Accessibility** | Real `<label>` elements on all form inputs · `aria-label` / `aria-expanded` / `aria-controls` on the menu · decorative orbs `aria-hidden` · global `:focus-visible` ring |
| **Motion** | `prefers-reduced-motion` honored — fade-ins disabled, smooth-scroll falls back to instant |
| **Performance** | Hero image `eager` + `fetchPriority="high"` · everything else `loading="lazy"` with explicit dimensions to prevent CLS |
| **SEO** | `<title>`, description, canonical URL, OpenGraph, Twitter card, theme-color, `<html lang="en">`, `robots.txt` |
| **Bundle** | ~100 KB JS · ~8 KB CSS (gzipped) |

---

## Contact

<div align="center">

[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:saadnadeem5509@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Saadnadeem07)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/saadnadeem07/)
[![Medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@saadnadeem07)
[![Linktree](https://img.shields.io/badge/Linktree-39E09B?style=for-the-badge&logo=linktree&logoColor=000)](https://linktr.ee/saadnadeem07)

</div>

---

<div align="center">

Built and shipped by **Saad Nadeem** · 2026

</div>
