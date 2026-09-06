# 🏥 MedGrid - BioMedical & Inter-Hospital Resource Exchange Network
> **Smart India Hackathon (SIH) Project**  
> A unified platform connecting multi-city hospitals to share emergency beds, ICU ventilators, oxygen reserves, blood units, and ambulances with live biomedical IoT telemetry tracking.

---

## 🎨 Design System & Theme
- **Primary Palette**: **Teal** (`#0d9488`, `#14b8a6`, `#2dd4bf`) + **Crisp White** (`#ffffff`, `#f8fafc`) + **Deep Navy** (`#0b132b`, `#070d1e`, `#1c2b4e`).
- **Aesthetics**: Modern Glassmorphism, real-time pulse indicators, glowing status badges, dark-mode first, and responsive typography.

---

## 📂 Simplified Clean Team Structure

```
├── public/                 # Static assets (logos, icons)
├── src/
│   ├── app/                # NEXT.JS APP ROUTER
│   │   ├── globals.css     # Global Tailwind CSS & Teal/Navy tokens
│   │   ├── layout.tsx      # Root layout wrapper with Plus Jakarta Sans
│   │   ├── page.tsx        # ⭐ PUBLIC LANDING PAGE (Front door & showcase)
│   │   │
│   │   ├── (auth)/         # Authentication (Login / Demo Role Switcher)
│   │   │   ├── login/page.tsx
│   │   │   └── register/page.tsx
│   │   │
│   │   ├── patient/        # 🫀 TEAMMATE 1'S ZONE
│   │   │   ├── layout.tsx  # Patient-specific navigation
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── request/page.tsx
│   │   │   ├── _components/EmergencyButton.tsx
│   │   │   └── api/route.ts
│   │   │
│   │   ├── doctor/         # 🩺 TEAMMATE 2'S ZONE
│   │   │   ├── layout.tsx  # Doctor-specific navigation
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── requests/page.tsx
│   │   │   ├── _components/AcceptToggle.tsx
│   │   │   └── api/route.ts
│   │   │
│   │   └── coordinator/    # 🏢 TEAMMATE 3'S ZONE
│   │       ├── layout.tsx  # Coordinator-specific navigation
│   │       ├── dashboard/page.tsx
│   │       ├── map/page.tsx
│   │       ├── _components/MapWidget.tsx
│   │       └── api/route.ts
│   │
│   ├── shared/             # 📜 THE DATA TREATY (Shared across all 3 roles)
│   │   ├── types/          # Database rules (user.ts, resource.ts, request.ts)
│   │   ├── db/             # Unified DB connector (supabase.ts & mockDb.ts)
│   │   └── auth/           # Role gatekeeper & route redirector
│   │
│   ├── components/         # 🧱 THE LEGO BRICKS (UI & universal elements)
│   │   ├── ui/             # Reusable UI (Button, Card, Badge, Input, Label)
│   │   ├── Navbar.tsx      # Landing page navigation bar
│   │   ├── Footer.tsx      # Landing page footer
│   │   └── DashboardShell.tsx # Universal cohesive layout for all 3 teammate roles
│   │
│   └── lib/                # 🛠️ UNIVERSAL TOOLBELT
│       └── utils.ts        # cn(), GIS distance calculations, time ago & badge helpers
│
├── .env.local              # Local environment configuration
├── components.json         # shadcn/ui configuration
├── tailwind.config.ts      # Tailwind color palette & glow animations
├── tsconfig.json           # TypeScript configuration with @/* aliases
└── package.json            # Project dependencies
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the **Public Landing Page**.

---

## 👥 How the Team Works Together
1. **Teammate 1 (Patient Zone)**: Works strictly inside `src/app/patient/` using types from `@/shared/types`.
2. **Teammate 2 (Doctor Zone)**: Works strictly inside `src/app/doctor/` using types from `@/shared/types`.
3. **Teammate 3 (Coordinator Zone)**: Works strictly inside `src/app/coordinator/` using types from `@/shared/types`.
4. **Shared Components**: Everyone reuses `src/components/ui/` and `src/components/DashboardShell.tsx` to keep the entire platform visually cohesive in **Teal + White + Deep Navy**.