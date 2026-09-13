# HarKaam - PWA (Progressive Web App)

> **"Ghar ka har kaam, ek jagah."**
> 
> A complete Home Services Marketplace Progressive Web App built with Next.js 16, TypeScript, Prisma ORM, and SQLite. Designed mobile-first to work as a native-like app on Android devices.

---

## 📱 App Preview

| Screen | Description |
|--------|-------------|
| Splash Screen | Green gradient with HarKaam logo and tagline |
| Onboarding | 3-slide introduction (Easy Booking, Search, Verified Providers) |
| Login | Email/Password + Quick Login buttons for all 3 roles |
| Register | Customer/Provider registration with role selection |
| Customer Home | Greeting, search, categories grid, top providers, quick actions |
| Categories | 10 service categories with icons (Urdu + English) |
| Services | Category-specific services with provider listings |
| Provider Profile | Photo, rating, verification badge, services, pricing, reviews |
| Booking Form | Problem description, address, date/time, notes |
| Booking Details | Status tracking, actions (accept/reject/status update), chat link |
| Payment | Amount entry, payment method selection (Cash/Online/Wallet) |
| Review | 1-5 star rating with optional written review |
| Chat | Real-time messaging between customer and provider |
| Notifications | Booking updates, payment confirmations, system alerts |
| Provider Dashboard | Stats (pending/active/completed), recent bookings |
| Provider Earnings | Total earnings, commission breakdown, transaction history |
| Admin Dashboard | Total customers, providers, bookings, revenue, commission |
| Admin Users | User management with role-based filtering |
| Admin Verification | Approve/reject provider verification requests |

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 + shadcn/ui |
| **Database** | SQLite (via Prisma ORM) |
| **State Management** | Zustand |
| **Authentication** | JWT (JSON Web Tokens) + bcryptjs |
| **Icons** | Lucide React |
| **Notifications** | Sonner (toast) |
| **UI Components** | shadcn/ui (New York style) |
| **PWA** | Web App Manifest + Apple Meta Tags |
| **API** | Next.js API Routes (REST) |

---

## 📂 Project Structure

```
harKaalam-pwa/
├── prisma/
│   └── schema.prisma          # Database schema (18 models)
├── public/
│   ├── manifest.json           # PWA manifest
│   ├── icon-192.png             # PWA icon 192x192
│   ├── icon-512.png             # PWA icon 512x512
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout (PWA meta tags)
│   │   ├── globals.css          # Global styles + animations
│   │   ├── page.tsx             # Main SPA (all 25+ screens)
│   │   └── api/
│   │       ├── auth/
│   │       │   ├── register/route.ts   # POST /api/auth/register
│   │       │   ├── login/route.ts      # POST /api/auth/login
│   │       │   └── me/route.ts         # GET /api/auth/me
│   │       ├── categories/route.ts     # GET /api/categories
│   │       ├── services/route.ts       # GET /api/services
│   │       ├── providers/
│   │       │   ├── route.ts            # GET /api/providers
│   │       │   └── [id]/route.ts        # GET /api/providers/:id
│   │       ├── bookings/
│   │       │   ├── route.ts            # GET/POST /api/bookings
│   │       │   └── [id]/
│   │       │       ├── route.ts        # GET/PUT/DELETE /api/bookings/:id
│   │       │       ├── accept/route.ts # POST /api/bookings/:id/accept
│   │       │       ├── reject/route.ts # POST /api/bookings/:id/reject
│   │       │       └── status/route.ts # POST /api/bookings/:id/status
│   │       ├── payments/route.ts       # POST /api/payments
│   │       ├── reviews/route.ts        # POST /api/reviews
│   │       ├── notifications/route.ts  # GET/PUT/POST /api/notifications
│   │       ├── messages/route.ts       # GET/POST /api/messages
│   │       └── admin/
│   │           ├── stats/route.ts      # GET /api/admin/stats
│   │           ├── users/route.ts      # GET /api/admin/users
│   │           ├── verification/route.ts # GET/POST /api/admin/verification
│   │           └── [id]/route.ts        # DELETE /api/admin/users/:id
│   ├── components/ui/              # shadcn/ui components (40+)
│   ├── hooks/
│   │   ├── use-mobile.ts
│   │   └── use-toast.ts
│   ├── lib/
│   │   ├── auth.ts               # JWT helpers (sign/verify/getUser)
│   │   ├── db.ts                 # Prisma client
│   │   └── utils.ts              # Utility functions
│   └── store/
│       └── useAppStore.ts         # Zustand store (navigation, auth, state)
├── scripts/
│   └── seed.ts                   # Database seeder
├── db/
│   └── custom.db                 # SQLite database
├── .env                          # Environment variables
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🗄️ Database Schema (18 Models)

| Model | Description | Key Fields |
|-------|-------------|------------|
| **User** | All users (Customer/Provider/Admin) | name, email, phone, password, role, avatar |
| **Provider** | Provider profile | profession, experience, bio, verificationStatus, avgRating, totalEarnings, totalJobs |
| **Category** | Service categories | name, nameUrdu, icon, sortOrder, isActive |
| **Service** | Individual services | name, nameUrdu, categoryId, description |
| **ProviderService** | Provider ↔ Service (pricing) | providerId, serviceId, price, priceUnit |
| **Booking** | Service bookings | customerId, providerId, serviceId, status, problemDesc, address, scheduledDate/Time |
| **Payment** | Payment records | bookingId, amount, commission, providerAmount, method, status, transactionId |
| **Review** | Ratings & reviews | bookingId, authorId, targetId, rating, serviceQuality, professionalism, punctuality, comment |
| **Message** | Chat messages | bookingId, senderId, receiverId, content, imageUrl, isRead |
| **Notification** | Push notifications | userId, title, body, type, isRead |
| **ProviderEarning** | Earnings history | providerId, amount, commission, netAmount, status |
| **ProviderAvailability** | Working hours | providerId, dayOfWeek, startTime, endTime |
| **Complaint** | User complaints | bookingId, userId, subject, description, status |
| **AppSettings** | App configuration | commissionRate, currency, appName, appTagline, supportPhone/Email |

### Enums

```
UserRole:        CUSTOMER | PROVIDER | ADMIN
VerificationStatus: PENDING | UNDER_REVIEW | VERIFIED | REJECTED
BookingStatus:   PENDING | ACCEPTED | ON_THE_WAY | WORK_STARTED | WORK_COMPLETED | PAYMENT_PENDING | COMPLETED | REJECTED | CANCELLED
PaymentStatus:   PENDING | PROCESSING | PAID | FAILED | REFUNDED
PaymentMethod:   CASH | ONLINE | WALLET
```

### Booking Lifecycle

```
PENDING → ACCEPTED → ON_THE_WAY → WORK_STARTED → WORK_COMPLETED → PAYMENT_PENDING → COMPLETED
   │           │
   │           └──→ REJECTED
   └──→ CANCELLED (by customer)
```

---

## 🔌 API Endpoints

### Authentication

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/register` | Register new user (Customer/Provider) | No |
| POST | `/api/auth/login` | Login and get JWT token | No |
| GET | `/api/auth/me` | Get current user profile + provider data | Yes |

### Categories & Services

| Method | Endpoint | Query Params | Description |
|--------|----------|-------------|-------------|
| GET | `/api/categories` | — | List all active categories |
| GET | `/api/services` | `categoryId`, `search` | List services with optional filters |

### Providers

| Method | Endpoint | Query Params | Description |
|--------|----------|-------------|-------------|
| GET | `/api/providers` | `serviceId`, `categoryId`, `search`, `profession`, `verified` | List verified providers |
| GET | `/api/providers/:id` | — | Provider profile with reviews & services |

### Bookings

| Method | Endpoint | Description | Role |
|--------|----------|-------------|------|
| GET | `/api/bookings` | List user's bookings (customer/provider) | Customer/Provider |
| POST | `/api/bookings` | Create new booking | Customer |
| GET | `/api/bookings/:id` | Booking details with messages & payment | Customer/Provider |
| PUT | `/api/bookings/:id` | Update booking | Owner |
| DELETE | `/api/bookings/:id` | Delete booking | Owner |
| POST | `/api/bookings/:id/accept` | Accept booking | Provider |
| POST | `/api/bookings/:id/reject` | Reject booking | Provider |
| POST | `/api/bookings/:id/status` | Update status (ON_THE_WAY, WORK_STARTED, etc.) | Provider/Customer |

### Payments

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/payments` | Process payment, update booking to COMPLETED |

**Request Body:** `{ bookingId, amount, method }`

**Response:** Creates Payment + ProviderEarning, updates Provider totals

### Reviews

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/reviews` | Submit rating & review (one per booking) |

**Request Body:** `{ bookingId, targetId, rating, serviceQuality, professionalism, punctuality, comment }`

### Messages (Chat)

| Method | Endpoint | Query Params | Description |
|--------|----------|-------------|-------------|
| GET | `/api/messages` | `bookingId` | Get chat messages (marks as read) |
| POST | `/api/messages` | — | Send message |

### Notifications

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notifications` | List user notifications |
| PUT | `/api/notifications` | Mark all as read |
| POST | `/api/notifications` | Create notification (admin/system) |

### Admin

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/stats` | Dashboard statistics (users, bookings, revenue, commission) |
| GET | `/api/admin/users` | All users with role filter (`?role=CUSTOMER`) |
| GET | `/api/admin/verification` | Pending provider verifications |
| POST | `/api/admin/verification` | Approve/reject provider (`{ providerId, status }`) |
| DELETE | `/api/admin/users/:id` | Delete user |

---

## 👥 User Roles & Flows

### Customer Flow

```
Splash → Onboarding → Login/Register
  → Home (categories, search, top providers, quick actions)
  → Browse Categories → Select Service → View Providers
  → Provider Profile (rating, reviews, pricing, verification)
  → Book Service (problem, address, date/time, notes)
  → Track Booking (status updates: Pending → Accepted → On The Way → Working → Completed)
  → Make Payment (Cash / Online / Wallet)
  → Rate & Review Provider
  → Chat with Provider
  → View Booking History
  → Notifications
  → Profile & Settings
```

**Bottom Navigation:** Home | Services | Bookings | Chat | Profile

### Provider Flow

```
Login/Register (as Provider)
  → Dashboard (pending/active/completed stats, recent bookings)
  → Accept/Reject Booking Requests
  → Update Booking Status (On The Way → Start Work → Complete Work)
  → View Earnings (total, commission breakdown, transaction history)
  → Chat with Customer
  → View Profile & Ratings
```

**Bottom Navigation:** Dashboard | Bookings | Earnings | Chat | Profile

### Admin Flow

```
Login (as Admin)
  → Dashboard (total customers, providers, bookings, revenue, commission)
  → Manage Users (list, filter by role, delete)
  → Provider Verification (approve/reject pending requests)
  → Monitor Bookings
  → App Settings
```

**Bottom Navigation:** Dashboard | Users | Verify | Bookings | Settings

---

## 🎨 UI/UX Design

### Color System

| Element | Color | Hex |
|---------|-------|-----|
| Primary (Green) | Main brand color | `#16a34a` |
| Primary Foreground | Text on primary | `#ffffff` |
| Secondary | Light green | `#f0fdf4` |
| Background | Page background | `#f8f9fa` |
| Card | Card background | `#ffffff` |
| Muted Text | Secondary text | `#64748b` |
| Accent | Light accent | `#dcfce7` |

### Design Principles

- **Mobile-First**: All screens designed for 375px+ width, max 448px container
- **Touch-Friendly**: Minimum 44px touch targets on all interactive elements
- **Green Theme**: Trust-inducing green color scheme (Pakistani marketplace aesthetic)
- **Card-Based UI**: Clean cards with subtle shadows for content sections
- **Bottom Navigation**: Fixed 5-tab navigation for each user role
- **Gradient Headers**: Green gradient header bars on key screens
- **Smooth Animations**: Fade-in transitions, slide-up effects
- **Scrollable Lists**: Horizontal scroll for providers, vertical for bookings
- **Status Badges**: Color-coded booking status indicators
- **Verification Badges**: Green shield icon for verified providers
- **Star Ratings**: Visual 1-5 star rating display

### Status Colors

| Status | Background | Text |
|--------|-----------|------|
| PENDING | Yellow | Yellow-800 |
| ACCEPTED | Blue | Blue-800 |
| ON_THE_WAY | Purple | Purple-800 |
| WORK_STARTED | Orange | Orange-800 |
| WORK_COMPLETED | Green | Green-800 |
| COMPLETED | Green-200 | Green-900 |
| REJECTED | Red | Red-800 |
| CANCELLED | Gray | Gray-800 |

---

## 🧪 Test Accounts

| Role | Email | Password | Name |
|------|-------|----------|------|
| **Admin** | `admin@harkaam.pk` | `admin123` | HarKaam Admin |
| **Customer 1** | `ahmed@email.com` | `customer123` | Ahmed Khan |
| **Customer 2** | `fatima@email.com` | `customer123` | Fatima Noor |
| **Customer 3** | `muhammad ali@email.com` | `customer123` | Muhammad Ali |
| **Customer 4** | `ayesha@email.com` | `customer123` | Ayesha Siddiqui |
| **Customer 5** | `hassan@email.com` | `customer123` | Hassan Raza |
| **Provider 1** | `rashid@email.com` | `provider123` | Rashid Iqbal (Plumber, Karachi) |
| **Provider 2** | `imran@email.com` | `provider123` | Imran Hussain (Electrician, Lahore) |
| **Provider 3** | `kamran@email.com` | `provider123` | Kamran Ahmed (Painter, Islamabad) |
| **Provider 4** | `tariq@email.com` | `provider123` | Tariq Mahmood (AC Tech, Rawalpindi) |
| **Provider 5** | `nasir@email.com` | `provider123` | Nasir Ali (Carpenter, Faisalabad) |

---

## 📦 Seeded Data

| Data Type | Count | Details |
|-----------|-------|---------|
| Service Categories | 10 | Plumber, Electrician, Carpenter, Painter, AC Tech, Appliance Repair, Cleaning, Home Maintenance, Pest Control, Moving |
| Services | 50 | 5 per category with Urdu names |
| Users | 11 | 1 Admin + 5 Customers + 5 Providers |
| Provider Profiles | 5 | With profession, experience, verification, availability |
| Provider Services | 15 | 3 services per provider with PKR pricing (500-5000) |
| Bookings | 10 | Various statuses across the lifecycle |
| Payments | 2 | For completed bookings (Cash/Online) |
| Reviews | 6 | 3-5 star ratings with comments |
| Messages | 10 | Customer ↔ Provider conversations |
| Notifications | 5 | Booking, payment, system notifications |
| Provider Earnings | 15 | 3 per provider with commission breakdown |
| Provider Availability | 30 | 6 days/week, 9AM-7PM |

---

## 📱 PWA Installation

### Android (Chrome)

1. Open the app URL in Chrome browser
2. Tap the **Menu (⋮)** button (3 dots, top right)
3. Tap **"Add to Home Screen"** or **"Install App"**
4. Tap **"Install"** to confirm
5. HarKaam icon will appear on your home screen
6. App opens in **standalone mode** (no browser bar) — looks like a native app!

### iOS (Safari)

1. Open the app URL in Safari
2. Tap the **Share button** (square with arrow)
3. Scroll down and tap **"Add to Home Screen"**
4. Tap **"Add"** to confirm
5. HarKaam icon appears on home screen

### PWA Features Configured

- ✅ `manifest.json` with app name, colors, icons
- ✅ `display: standalone` (no browser chrome)
- ✅ `orientation: portrait` locked
- ✅ `theme_color: #16a34a` (green status bar)
- ✅ `background_color: #f8f9fa`
- ✅ Apple touch icon (192x192)
- ✅ `mobile-web-app-capable` meta tag
- ✅ `apple-mobile-web-app-capable` meta tag
- ✅ `apple-status-bar-style` configured
- ✅ Icons: 192x192 and 512x512 PNG

---

## 🔐 Security Features

| Feature | Implementation |
|---------|---------------|
| **Password Hashing** | bcryptjs (salt rounds: 10) |
| **JWT Authentication** | 7-day token expiry, Bearer header |
| **Role-Based Access** | ADMIN/PROVIDER/CUSTOMER route protection |
| **Input Validation** | Server-side validation on all API routes |
| **SQL Injection Protection** | Prisma ORM (parameterized queries) |
| **Booking Authorization** | Users can only access their own bookings |
| **Admin-Only Routes** | `/api/admin/*` requires ADMIN role |
| **Unique Constraints** | Email, phone uniqueness enforced at DB level |

---

## 💰 Revenue Model

**Commission-based marketplace model:**

```
Booking Amount:    PKR 2,000
Commission (10%):  PKR 200
Provider Receives: PKR 1,800
```

- Commission rate: **10%** (configurable via AppSettings)
- Auto-calculated on payment
- Provider earnings tracked per transaction
- Admin dashboard shows total revenue and commission

---

## 🚀 How to Run Locally

### Prerequisites

- Node.js 18+ or Bun
- npm or bun

### Installation

```bash
# Clone or copy the project
cd harkaam-pwa

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env
# Edit .env with your JWT_SECRET

# Push database schema
bun run db:push

# Seed the database
bun run scripts/seed.ts

# Start development server
bun run dev
```

### Environment Variables

```env
DATABASE_URL=file:./db/custom.db
JWT_SECRET=your_secure_secret_key_here
```

---

## 📋 Future Enhancements (Phase 2)

- [ ] **Real-time Chat** — Socket.io integration for live messaging
- [ ] **Google Maps** — Provider location tracking and ETA
- [ ] **Push Notifications** — Firebase Cloud Messaging (FCM)
- [ ] **Payment Gateway** — Easypaisa, JazzCash, Stripe
- [ ] **Image Upload** — CNIC documents, work photos, profile pictures
- [ ] **OTP Verification** — Phone number verification via SMS
- [ ] **Wallet System** — In-app wallet with top-up and payments
- [ ] **Advanced Analytics** — Charts, graphs, export reports
- [ ] **Complaint System** — Full complaint management
- [ ] **Multi-language** — Complete Urdu language support
- [ ] **Dark Mode** — Theme toggle
- [ ] **Provider Portfolio** — Photo gallery of past work
- [ ] **Service Area Maps** — Geolocation-based provider search
- [ ] **Rating Breakdown** — Separate ratings for quality, punctuality, professionalism
- [ ] **Booking Cancellation Policy** — Time-based cancellation rules
- [ ] **Admin Reports** — PDF/Excel export of bookings and revenue

---

## 📄 License

Private project — All rights reserved.

---

Built with ❤️ for Pakistan | **HarKaam** — *Ghar ka har kaam, ek jagah.*
