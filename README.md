# Morgans Landscaping — Knightdale Rock & Yard Landscaping

A multi-page React application built with **React JS**, **Vite**, and **Tailwind CSS** for **Morgans Landscaping**, serving homeowners across Knightdale, Wendell, Wendell Falls, and Eastern Wake County, NC.

---

## 🌟 Key Features & Innovations

1. **Interactive Before & After Yard Transformation Slider**
   - Draggable slider comparing Carolina builder red clay vs. lush farm-fresh sod and river rock bed borders.
   - Presets for *Bare Clay*, *50/50 Split*, and *Lush Yard*.
2. **Interactive Turnkey Sod & Yard Cost Estimator**
   - Dynamic square footage slider (500 to 6,000+ sq. ft.) with quick presets (Townhome, Subdivision Backyard, Corner Lot, Full Yard).
   - Real-time calculations for Bermuda ($1.65–$2.15/sq.ft), Zoysia ($1.95–$2.50/sq.ft), and Tall Fescue ($1.55–$2.05/sq.ft).
   - One-click transfer of estimated parameters directly into the quote scheduler.
3. **Filterable 4-Category Rock & Mulch Gallery**
   - Natural River Rock & Stone Borders
   - Drainage & Dry Creek Bed Solutions
   - Low-Maintenance Shredded Hardwood & Pine Bark Mulch
   - Full Yard Makeovers (Sod + Rock/Mulch Combo)
   - Interactive Lightbox inspection modal with neighborhood tags.
4. **Interactive Free Measurement & Quote Scheduler**
   - Multi-field scheduling form with validation, neighborhood quick-select chips (Wendell Falls, Knightdale Station, Planters Walk, Harper's Landing).
   - Instant confirmation with appointment summary and celebratory confetti.
5. **Mobile-Responsive & Quick-Action Bar**
   - Persistent Call/Text bar for mobile users (`(919) 437-1132`).
   - Sticky glassmorphic navigation header.

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## 🌿 Push to GitHub & Deploy to Vercel

### Step 1: Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new) and create a repository (e.g. `morgans-landscaping`).
2. Add your remote origin and push:
```bash
git remote add origin https://github.com/<YOUR-USERNAME>/morgans-landscaping.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel (One-Click)
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New..." → "Project"**.
3. Import your `morgans-landscaping` repository from GitHub.
4. Framework Preset: **Vite** (automatically detected).
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **"Deploy"**.

Your website will be live worldwide on a `.vercel.app` domain with automatic HTTPS, global CDN caching, and continuous deployment!

### Alternatively: Deploy via Vercel CLI
```bash
npx vercel
# Follow the interactive prompts, then deploy to production:
npx vercel --prod
```

---

## 📁 Project Architecture

```
├── .gitignore
├── index.html                  # HTML entry point with Google Fonts & SEO metadata
├── package.json
├── postcss.config.js
├── tailwind.config.js          # Custom emerald, forest, and Carolina earth tones
├── vercel.json                 # Vercel SPA routing rewrites & security headers
├── vite.config.js
└── src/
    ├── App.jsx                 # Routing configuration & layout
    ├── index.css               # Tailwind directives & styles
    ├── main.jsx                # React root mount
    ├── components/
    │   ├── BeforeAfterSlider.jsx       # Interactive drag comparison
    │   ├── FloatingActionBar.jsx       # Mobile quick contact pill
    │   ├── Footer.jsx                  # Global footer with hours & areas
    │   ├── InteractiveSodCalculator.jsx# Live price estimator
    │   ├── Navbar.jsx                  # Sticky navigation & call CTAs
    │   ├── NeighborhoodBadges.jsx      # Wake County subdivision guide
    │   └── PhotoLightboxModal.jsx      # Fullscreen gallery inspector
    ├── data/
    │   └── landscapingData.js          # Pricing, varieties, reviews & gallery
    └── pages/
        ├── HomePage.jsx                # Page 1: Hero, packages, pricing & reviews
        └── GalleryQuotePage.jsx        # Page 2: Filterable gallery & quote scheduler
```

---

## 📞 Business Information
- **Client:** Morgans Landscaping — Knightdale Rock & Yard Landscaping
- **Phone:** (919) 437-1132
- **Service Area:** Knightdale, Wendell, Wendell Falls, and Eastern Wake County, NC
- **Hours:** Monday – Saturday, 7:00 AM – 6:00 PM
