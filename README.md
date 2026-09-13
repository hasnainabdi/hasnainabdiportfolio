# Syed Muhammad Hasnain Abdi — Portfolio Website

> Personal portfolio of **Syed Muhammad Hasnain Abdi** — Full Stack & AI Application Developer. Built with Next.js 16, TypeScript, Tailwind CSS 4, and Framer Motion.

**Live URL:** [hasnainabdi.space-z.ai](https://hasnainabdi.space-z.ai)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Sections of the Website](#sections-of-the-website)
- [Featured Projects](#featured-projects)
- [SEO Implementation](#seo-implementation)
- [Performance Optimizations](#performance-optimizations)
- [Analytics & Tracking](#analytics--tracking)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Build & Deploy](#build--deploy)
- [Customization Guide](#customization-guide)
- [Contact](#contact)
- [License](#license)

---

## Overview

This is a high-performance, SEO-optimized personal portfolio website showcasing the work, skills, and services of **Syed Muhammad Hasnain Abdi**. The site is designed to rank on Google for keywords like *"Syed Muhammad Hasnain Abdi portfolio"*, *"Full Stack Developer Pakistan"*, and *"AI Application Developer Karachi"*.

The website serves as a digital business card — visitors can explore featured projects with detailed image galleries, read about services offered, view experience and education timeline, and submit inquiries through a working contact form with email auto-reply.

Built using the **Next.js App Router** with **Static Site Generation (SSG)** for blazing-fast page loads and superior SEO indexing. The entire site (including dynamic project pages) is pre-rendered to static HTML at build time.

---

## Features

### Core Features

- **Hero section** with animated entrance, name reveal, and call-to-action buttons
- **Services section** showcasing 4 core service offerings with icons
- **Featured projects** with dedicated detail pages (SSG pre-rendered)
- **E-commerce style image gallery** on project pages — main image, thumbnail strip, arrow navigation, dot indicators
- **Skills section** with categorized tech skills and proficiency indicators
- **Tech stack grid** showing all technologies the developer works with
- **Experience timeline** — work history with company, role, dates, and responsibilities
- **Stats counter** — animated count-up for years of experience, projects completed, etc.
- **Certifications & Education** — academic and professional credentials
- **Contact form** with server-side email sending (Nodemailer) and auto-reply to user
- **Resume download** — PDF resume available for download
- **Responsive navigation** with mobile menu, scroll progress bar, and active section highlighting

### UX & Visual

- **Dark theme** with orange (#cc5500) accent color
- **Framer Motion animations** — fade-ins, slide-ups, magnetic buttons, scroll-triggered reveals
- **Custom cursor effects** with hover states
- **Animated loader** on initial page load
- **Tilt card** hover effects on project cards
- **Background gradient effects** — subtle animated mesh gradients
- **Fully responsive** — desktop, tablet, mobile optimized
- **Sticky social sidebar** — fixed left/right sidebar with social links

### Technical

- **Static Site Generation (SSG)** — all pages pre-rendered including dynamic `/projects/[slug]` routes
- **Server & Client component separation** — interactive parts (ImageGallery) isolated as client components
- **TypeScript** — strict typing throughout
- **Tailwind CSS 4** — utility-first styling
- **shadcn/ui components** — accessible, customizable UI primitives
- **Image optimization** — WebP/AVIF format, lazy loading for below-fold images

---

## Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 |
| **UI Components** | shadcn/ui (Radix UI primitives) |
| **Animations** | Framer Motion 12 |
| **Icons** | Lucide React |
| **Email** | Nodemailer 9 |
| **Image Processing** | Sharp |
| **Runtime** | Bun (production), Node.js (dev) |
| **Deployment** | Vercel / Space-Z.ai |

---

## Project Structure

```
my-project/
├── public/
│   ├── images/
│   │   ├── hasnain-profile.webp          # Hero profile image
│   │   ├── about-workspace.webp         # About section image
│   │   └── screenshots/                # Project screenshots (16 images)
│   ├── resume.pdf
│   ├── icon.svg                         # Favicon
│   ├── apple-icon.svg
│   └── manifest.webmanifest            # PWA manifest
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # Root layout (SEO, fonts, GTM, GA4, 4 JSON-LD schemas)
│   │   ├── page.tsx                    # Home page (single-page with sections + Testimonials)
│   │   ├── globals.css                 # Tailwind + custom styles
│   │   ├── opengraph-image.tsx         # Dynamic OG image (1200×630)
│   │   ├── twitter-image.tsx           # Dynamic Twitter image (1200×600)
│   │   ├── robots.ts                   # robots.txt generator
│   │   ├── sitemap.ts                  # sitemap.xml generator (real URLs only, no hash)
│   │   ├── icon.svg                    # App icon
│   │   ├── about/
│   │   │   └── page.tsx                # Dedicated About page (static)
│   │   ├── services/
│   │   │   └── page.tsx                # Dedicated Services page (static)
│   │   ├── experience/
│   │   │   └── page.tsx                # Dedicated Experience page (static)
│   │   ├── projects/
│   │   │   ├── page.tsx                # Projects overview page (static)
│   │   │   └── [slug]/
│   │   │       ├── page.tsx            # Project case study (SSG + BreadcrumbList + CreativeWork JSON-LD)
│   │   │       └── ImageGallery.tsx     # Client component for gallery
│   │   ├── api/
│   │   │   ├── route.ts
│   │   │   └── contact/
│   │   │       └── route.ts            # Contact form API (Nodemailer)
│   │
│   ├── components/
│   │   ├── ui/                         # shadcn/ui components (40+)
│   │   └── portfolio/
│   │       ├── data.ts                 # Central data file (projects with case study fields, testimonials, process, etc.)
│   │       ├── Hero.tsx                # Hero with H1
│   │       ├── Navbar.tsx              # Hybrid nav — scrolls on home, navigates on other pages
│   │       ├── PageShell.tsx           # Shared layout for dedicated pages
│   │       ├── ProjectPageShell.tsx    # Shared layout for project detail pages
│   │       ├── About.tsx
│   │       ├── Services.tsx
│   │       ├── Skills.tsx
│   │       ├── TechStack.tsx
│   │       ├── Projects.tsx
│   │       ├── Experience.tsx
│   │       ├── Stats.tsx
│   │       ├── Testimonials.tsx        # Client testimonials + highlights
│   │       ├── Certifications.tsx
│   │       ├── Education.tsx
│   │       ├── CertificationsEducation.tsx
│   │       ├── Resume.tsx
│   │       ├── Contact.tsx
│   │       ├── Footer.tsx              # Footer with real internal links
│   │       ├── Loader.tsx
│   │       ├── BackgroundEffects.tsx
│   │       ├── CursorEffects.tsx
│   │       ├── ScrollProgress.tsx
│   │       ├── SocialSidebar.tsx
│   │       ├── Magnetic.tsx
│   │       ├── TiltCard.tsx
│   │       └── SectionHeading.tsx
│   │
│   ├── hooks/
│   │   ├── use-mobile.ts
│   │   └── use-toast.ts
│   │
│   └── lib/
│       ├── utils.ts                    # cn() helper, etc.
│       └── db.ts                       # Prisma client
│
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## Sections of the Website

The single-page portfolio has the following sections (with anchor IDs):

| # | Section | Anchor | Description |
|---|---|---|---|
| 1 | **Hero** | `#home` | Name, tagline, CTA buttons, profile image |
| 2 | **About** | `#about` | Bio, workspace image, key highlights |
| 3 | **Services** | `#services` | 4 service cards with icons |
| 4 | **Tech Stack** | `#tech-stack` | Grid of all technologies |
| 5 | **Skills** | `#skills` | Categorized skills with proficiency |
| 6 | **Projects** | `#projects` | 4 featured project cards → detail pages |
| 7 | **Experience** | `#experience` | Work timeline |
| 8 | **Stats** | `#stats` | Animated counters (2+ years, 10+ projects) |
| 9 | **Resume** | `#resume` | Downloadable resume + skills summary |
| 10 | **Certifications** | `#certifications` | Professional certs |
| 11 | **Education** | `#education` | Academic history |
| 12 | **Contact** | `#contact` | Contact form + social links |

---

## Featured Projects

The portfolio showcases 4 real projects with live URLs and GitHub repos:

### 1. Portfolio Website
- **Slug:** `/projects/portfolio-website`
- **Live:** hasnainabdi.space-z.ai
- **Description:** This website itself — built with Next.js 16, TypeScript, and Tailwind CSS 4
- **Screenshots:** 4 (hero, about-services, skills-projects, experience-contact)

### 2. HarKaam — Home Services Marketplace
- **Slug:** `/projects/harkam`
- **Live:** harkam.space-z.ai
- **Description:** On-demand home services marketplace connecting customers with verified service providers
- **Screenshots:** 4 (home, categories, providers, bookings)

### 3. My Skills Career Platform
- **Slug:** `/projects/ai-career-platform`
- **Live:** careerplatform.space-z.ai
- **Description:** AI-powered career platform with resume builder, AI interview prep, and job matching
- **Screenshots:** 4 (landing, dashboard, AI tools, jobs)

### 4. Lead to Launch
- **Slug:** `/projects/leadtolaunch`
- **Live:** leadtolaunch.space-z.ai
- **Description:** Lead management and CRM system with lead capture, pipeline tracking, and analytics
- **Screenshots:** 4 (dashboard, discover, leads, settings)

Each project page features:
- E-commerce style image gallery with thumbnails
- Project description and key features list
- GitHub and live website action buttons
- SEO-optimized metadata with "Syed Muhammad Hasnain Abdi Portfolio" branding

---

## SEO Implementation

This website is built with search engine optimization as a top priority. Current estimated SEO score: **95/100**.

### On-Page SEO

- **Title tag:** "Syed Muhammad Hasnain Abdi — Full Stack & AI Developer Portfolio" (keyword-rich, brand-first)
- **Meta description:** 160 chars, includes name + role + services + CTA
- **H1:** Exactly 1 H1 on the entire site ("Muhammad Hasnain" + subtitle "Syed — Full Stack & AI Developer")
- **H2/H3 hierarchy:** Proper heading structure (4 H2s, 11 H3s)
- **Image alt text:** 100% of images have descriptive alt text
- **URL structure:** Clean URLs, no query strings

### Meta Keywords (68 strong keywords)

Strategically placed keywords covering:

- **Brand:** "Syed Muhammad Hasnain Abdi portfolio", "Muhammad Hasnain Abdi"
- **Role:** "Full Stack Developer Pakistan", "AI Application Developer", "Next.js Developer Karachi"
- **AI Skills:** "OpenAI Developer", "ChatGPT API Developer", "RAG Developer"
- **Services:** "SEO Specialist Pakistan", "Website Development Services Pakistan"
- **Location:** "Karachi Web Developer", "Pakistan Developer"
- **Hiring:** "Hire Full Stack Developer", "Freelance Developer Pakistan"

### Technical SEO

- **Canonical URL:** Self-referencing canonical tag
- **robots.txt:** Properly configured with sitemap reference, blocks `/api/`, `/_next/`, `/admin/`
- **sitemap.xml:** Auto-generated with all section URLs
- **HTTPS:** Enforced
- **JSON-LD Structured Data:** 3 schemas
  - `Person` — full identity, occupation, alumni, skills
  - `WebSite` — site name, URL, search action
  - `ProfessionalService` — services, area served, provider
- **HTML lang:** `en`
- **Mobile viewport:** Properly configured
- **PWA Manifest:** `/manifest.webmanifest`

### Open Graph & Twitter Cards

- **og:title, og:description, og:image, og:url, og:type** — all set
- **Twitter Card:** `summary_large_image`
- **Dynamic OG image:** Next.js ImageResponse (1200×630) with name, title, and branding
- **Dynamic Twitter image:** (1200×600)

### Google Services

- **Google Search Console** — verified (`yMMzG4KPaNopHMWf4J9QFu3R2VknNacvdUHByuGRG5c`)
- **Google Tag Manager** — `GTM-WQ7SRMQM` (head + noscript)
- **Google Analytics 4** — `G-4JPL3F98DV`

---

## Performance Optimizations

- **Static Site Generation (SSG)** — all pages pre-rendered to static HTML
- **Image optimization:** WebP/AVIF formats, lazy loading for below-fold images
- **Font optimization:** `font-display: swap`, preconnect to Google Fonts, font preloading
- **Cache headers:** `s-maxage=31536000` (1 year) on static assets
- **Server component optimization:** Server components where possible, client components only for interactivity
- **Bundle size:** ~360KB total page weight
- **DOM Content Loaded:** ~486ms
- **Page Load:** ~628ms

---

## Analytics & Tracking

The website has the following tracking integrations:

| Service | ID | Purpose |
|---|---|---|
| **Google Tag Manager** | `GTM-WQ7SRMQM` | Central tag management |
| **Google Analytics 4** | `G-4JPL3F98DV` | Traffic analytics |
| **Google Search Console** | `yMMzG4KPaNopHMWf4J9QFu3R2VknNacvdUHByuGRG5c` | Search indexing & monitoring |

GTM is loaded synchronously in the `<head>` (per Google's recommendation), and the noscript iframe is placed immediately after `<body>`. GA4 is loaded with Next.js `Script` component using `afterInteractive` strategy.

---

## Getting Started

### Prerequisites

- Node.js 18+ (or Bun 1.3+)
- npm / pnpm / bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hasnainabdi/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Set up environment variables** — create `.env.local`:
   ```bash
   # Email (for contact form)
   GMAIL_USER=your.email@gmail.com
   GMAIL_APP_PASSWORD=your-app-password

   # Site URL
   NEXT_PUBLIC_SITE_URL=https://hasnainabdi.space-z.ai
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open** [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

| Variable | Description | Required |
|---|---|---|
| `GMAIL_USER` | Gmail address for sending contact form emails | Yes (for contact) |
| `GMAIL_APP_PASSWORD` | Gmail App Password (not your regular password) | Yes (for contact) |
| `NEXT_PUBLIC_SITE_URL` | Production site URL (used for SEO) | Yes |

To get a Gmail App Password:
1. Go to [Google Account → Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification
3. Search for "App passwords"
4. Generate a new app password for "Mail"

---

## Build & Deploy

### Build

```bash
npm run build
```

This runs `next build` and copies static + public assets to `.next/standalone/`.

### Start (Production)

```bash
npm run start
```

Uses Bun runtime to run the standalone server.

### Deploy

The site is deployed on **Space-Z.ai** infrastructure. The production build is automatically deployed when changes are pushed to the main branch.

To redeploy manually:
```bash
npm run build && npm run start
```

### Lint

```bash
npm run lint
```

---

## Customization Guide

### How to Update Content

All content is centralized in one file:

**`src/components/portfolio/data.ts`**

This file exports:
- `personalInfo` — name, title, email, phone, social links
- `navLinks` — navigation items
- `stats` — animated counters
- `services` — service cards
- `skills` — categorized skills
- `techStack` — technologies grid
- `projects` — featured projects (with slugs, images, features)
- `experiences` — work history
- `certifications` — professional certs
- `education` — academic history

### How to Add a New Project

1. **Add screenshots** to `public/images/screenshots/`
2. **Add project entry** in `data.ts`:
   ```typescript
   {
     slug: "new-project",
     title: "New Project Name",
     description: "Short description",
     fullDescription: "Detailed description...",
     tags: ["Next.js", "TypeScript"],
     image: "/images/screenshots/new-project-1.webp",
     images: [
       "/images/screenshots/new-project-1.webp",
       "/images/screenshots/new-project-2.webp",
     ],
     features: ["Feature 1", "Feature 2"],
     github: "https://github.com/...",
     liveUrl: "https://...",
   }
   ```
3. **Rebuild** — the new project page is automatically generated via `generateStaticParams`

### How to Change Colors

Edit `src/app/globals.css` and update the CSS variables:
- Primary accent: `#cc5500` (orange)
- Background: `#000000` (dark theme)
- Foreground: `#ffffff`

### How to Update SEO Keywords

Edit the `keywords` array in `src/app/layout.tsx`.

### How to Update Google Tags

In `src/app/layout.tsx`:
- **GTM ID:** Look for `GTM-WQ7SRMQM` (2 places — head script + noscript iframe)
- **GA4 ID:** Look for `G-4JPL3F98DV`
- **Search Console verification:** Look for `google-site-verification` meta tag

---

## Contact

**Syed Muhammad Hasnain Abdi**
Full Stack & AI Application Developer

- **Email:** m.hasnainreactions@gmail.com
- **Phone:** +92 322 1374013
- **Location:** Karachi, Pakistan
- **Website:** [hasnainabdi.space-z.ai](https://hasnainabdi.space-z.ai)
- **GitHub:** [github.com/hasnainabdi](https://github.com/hasnainabdi)
- **LinkedIn:** [linkedin.com/in/m-hasnain-abdi](https://linkedin.com/in/m-hasnain-abdi)

For freelance projects, full-time opportunities, or collaboration inquiries, please use the [contact form](https://hasnainabdi.space-z.ai#contact) on the website.

---

## License

This project is the personal portfolio of Syed Muhammad Hasnain Abdi. The code is shared for educational purposes. You may reference the structure and approach, but please do not copy the design, content, or branding without permission.

© 2026 Syed Muhammad Hasnain Abdi. All rights reserved.
