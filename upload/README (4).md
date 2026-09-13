# Lead to Launch — AI-Powered Freelance Lead Pipeline

Turn discovered businesses into paying clients with an automated AI-driven pipeline.

## Overview

Lead to Launch is a full-stack Next.js application that automates the entire freelance lead generation and outreach process. Discover local businesses, audit their online presence, rank them by opportunity, generate custom AI prompts, and create personalized outreach messages — all in one place.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + shadcn/ui (New York) |
| Icons | Lucide React |
| Database | SQLite via Prisma ORM |
| AI SDK | z-ai-web-dev-sdk |
| State | React hooks + localStorage |
| Runtime | Bun |

## Pipeline Stages

Every lead flows through a 5-phase automated pipeline:

```
Discovered → Audited → Ranked → Prompt Ready → Outreach Ready → Contacted
```

1. **Discovered** — Found via web search or AI generation
2. **Audited** — AI analyzes the business website and online presence
3. **Ranked** — AI scores and ranks the lead by opportunity quality
4. **Prompt Ready** — AI generates a custom prompt tailored to the business
5. **Outreach Ready** — AI creates a personalized outreach message
6. **Contacted** — Marked as contacted after you reach out

## Features

### Dashboard
- Real-time pipeline statistics and funnel visualization
- Recent activity feed
- Quick actions for top leads
- Stage-by-stage lead count overview

### Discover
- **Web Search** — Search for businesses by type and location, powered by AI web search + web reader for deep contact extraction
- **AI Generate** — Describe your ideal leads in natural language, AI generates matching business leads
- Select multiple results and add to pipeline in bulk
- Extracts: business name, email, phone, website, rating

### Leads Management
- Full CRUD operations (add, view, edit, delete)
- Search by name, email, phone, location
- Filter by pipeline status
- Sort by date, name, or rating
- Click any lead to open detailed side sheet
- Run pipeline actions (audit, rank, prompt, outreach) directly from the lead detail view

### Lead Detail Sheet
- Complete business info with clickable email, phone, and website links
- Google Maps iframe for location visualization
- Star rating display
- Phase tracker showing pipeline progress
- Accordion sections for each pipeline phase result
- Copy-to-clipboard for all generated content
- Run/retry each pipeline phase individually

### AI Capabilities
- **Website Audit** — AI crawls and analyzes the business website for weaknesses and opportunities
- **Lead Ranking** — AI scores leads based on audit results, rating, and potential
- **Prompt Generation** — AI creates custom prompts tailored to each business for outreach
- **Outreach Messages** — AI generates personalized cold emails, LinkedIn messages, WhatsApp messages, and more
- All AI calls use `z-ai-web-dev-sdk` on the backend

### Settings
- **Profile** — Your name, email, phone, business name, website, and bio (used in AI-generated outreach)
- **AI Configuration** — Communication tone, outreach language, creativity level, outreach style, email signature
- **Pipeline Preferences** — Default location, default business type, results per page, auto-advance, Google Maps toggle
- **Data Management** — Database statistics, export to Excel/PDF, clear all leads (with confirmation)
- **About** — App version, feature list, pipeline stages overview

### Export
- Export all leads to **Excel (.xlsx)**
- Export all leads to **PDF**

### Design
- Fully responsive (mobile-first)
- Sticky sidebar with pipeline summary on desktop
- Mobile bottom tab bar navigation
- Dark/light theme support (next-themes)
- Sticky footer
- Shadcn/ui components throughout
- Violet accent color scheme

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                    # Root layout with fonts, toaster, theme
│   ├── page.tsx                      # Main orchestrator (~200 lines)
│   └── api/
│       ├── settings/route.ts         # GET stats, DELETE clear all
│       └── leads/
│           ├── route.ts              # GET (list/search), POST (create)
│           ├── discover/route.ts     # POST web search + AI extract
│           ├── ai-generate/route.ts  # POST AI lead generation
│           ├── bulk-create/route.ts  # POST bulk lead creation
│           ├── export/
│           │   ├── xlsx/route.ts     # Excel export
│           │   └── pdf/route.ts      # PDF export
│           └── [id]/
│               ├── route.ts          # GET, PUT, DELETE single lead
│               ├── audit/route.ts    # POST run AI audit
│               ├── rank/route.ts     # POST run AI rank
│               ├── prompt/route.ts   # POST generate prompt
│               ├── outreach/route.ts # POST generate outreach
│               └── contacted/route.ts# POST mark as contacted
├── components/
│   ├── DashboardTab.tsx              # Dashboard with stats & funnel
│   ├── DiscoverTab.tsx               # Lead discovery (search + AI)
│   ├── LeadsTab.tsx                  # Leads table with filters
│   ├── LeadDetailSheet.tsx           # Lead detail side sheet
│   ├── SettingsTab.tsx               # Full settings panel (5 tabs)
│   ├── Sidebar.tsx                   # Navigation sidebar
│   └── ui/                           # shadcn/ui components
├── lib/
│   ├── db.ts                         # Prisma client singleton
│   ├── pipeline-constants.ts         # Types, status config, pipeline stages
│   └── utils.ts                      # Utility functions (cn)
└── hooks/
    ├── use-mobile.ts                 # Mobile detection hook
    └── use-toast.ts                  # Toast notification hook
prisma/
└── schema.prisma                     # Lead and User models (SQLite)
```

## Database Schema

```prisma
model Lead {
  id            String   @id @default(cuid())
  businessName  String
  location      String
  source        String   @default("manual")
  website       String?
  email         String?
  phone         String?
  rating        Float?
  contact       String?
  audit         String?
  rank          String?
  rankScore     Int?
  sitePrompt    String?
  outreach      String?
  followUp      String?
  status        String   @default("discovered")
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}
```

## Getting Started

### Prerequisites
- [Bun](https://bun.sh/) runtime
- Node.js (for some tooling)

### Setup

```bash
# Install dependencies
bun install

# Set up database
bun run db:push

# Start development server
bun run dev
```

The app runs on `http://localhost:3000`.

### Scripts

| Script | Description |
| --- | --- |
| `bun run dev` | Start dev server (port 3000) |
| `bun run lint` | Run ESLint |
| `bun run db:push` | Push schema to database |
| `bun run db:generate` | Generate Prisma client |
| `bun run db:migrate` | Run database migrations |
| `bun run db:reset` | Reset database |

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/leads` | List leads (search, filter, sort) |
| POST | `/api/leads` | Create a new lead |
| POST | `/api/leads/discover` | Web search for businesses |
| POST | `/api/leads/ai-generate` | AI-generate leads from description |
| POST | `/api/leads/bulk-create` | Add multiple leads at once |
| GET | `/api/leads/export/xlsx` | Export leads as Excel |
| GET | `/api/leads/export/pdf` | Export leads as PDF |
| GET | `/api/settings` | Get database statistics |
| DELETE | `/api/settings?confirm=DELETE_ALL` | Clear all leads |
| POST | `/api/leads/:id/audit` | Run AI audit on a lead |
| POST | `/api/leads/:id/rank` | Run AI ranking on a lead |
| POST | `/api/leads/:id/prompt` | Generate AI prompt for a lead |
| POST | `/api/leads/:id/outreach` | Generate AI outreach for a lead |
| POST | `/api/leads/:id/contacted` | Mark lead as contacted |
| GET | `/api/leads/:id` | Get single lead |
| PUT | `/api/leads/:id` | Update a lead |
| DELETE | `/api/leads/:id` | Delete a lead |

## Environment Variables

Key environment variables are loaded from `.env`:

- `DATABASE_URL` — SQLite database path
- AI SDK credentials (handled by z-ai-web-dev-sdk)

## License

Private project.
