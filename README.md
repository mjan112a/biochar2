# Poultry Biochar Circularity System

An interactive Next.js web application explaining the integrated poultry waste → biochar → energy circular economy system for policymakers and industry leaders.

**Client:** Calvin Wohlert / WasteHub  
**Developer:** Jeff Myers  
**Version:** 1.0.0

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📋 Project Overview

This application demonstrates the complete circular economy system for converting poultry waste into multiple valuable products:

- **Biochar** for carbon sequestration and soil amendment
- **Renewable Natural Gas** (RNG) for energy
- **Fertilizer** from digestate
- **Multiple revenue streams** from carbon credits, biochar sales, and energy

### Key Features

- ✅ Interactive Current/Proposed system toggle
- ✅ 5 clickable component icons with hover tooltips (<50ms response)
- ✅ 3 benefit category filters (Environmental, Economic, Reuse)
- ✅ Detailed component pages with technical information
- ✅ Benefits organized by category with expandable sections
- ✅ Responsive design (desktop primary, tablet secondary, mobile simplified)
- ✅ WasteHub branding integration
- ✅ WCAG 2.1 AA accessibility compliant

## 🏗️ Architecture

### Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI (Tooltip, Tabs, Accordion)
- **Icons:** Lucide React (placeholder, easily replaceable)
- **Animations:** Framer Motion
- **State Management:** React Context + Hooks
- **Hosting:** Vercel (recommended)

### Directory Structure

```
poultry-biochar-tool/
├── src/
│   └── app/
│       ├── layout.tsx           # Root layout with providers
│       ├── page.tsx              # Main overview page
│       └── [component]/
│           └── page.tsx          # Dynamic component detail pages
├── components/
│   ├── system/
│   │   ├── ComponentIcon.tsx    # Clickable icon with tooltip
│   │   └── ToggleSwitch.tsx     # Current/Proposed toggle
│   ├── detail/
│   └── ui/
│       └── Icon.tsx              # Reusable icon component
├── lib/
│   ├── iconRegistry.ts          # Icon configuration (CRITICAL)
│   └── constants.ts             # Colors, sizes, config
├── hooks/
│   └── useSystemView.tsx        # Global toggle state
├── types/
│   └── index.ts                 # TypeScript definitions
├── data/
│   ├── system/
│   │   ├── overview.json        # System descriptions
│   │   └── flows.json           # Material/energy flows
│   ├── components/
│   │   ├── chicken-house.json
│   │   ├── processing-plant.json
│   │   ├── anaerobic-digester.json
│   │   ├── pyrolysis-unit.json
│   │   └── farm-waterways.json
│   └── benefits/
│       ├── economic.json
│       ├── environmental.json
│       └── reuse.json
└── public/
    ├── images/
    │   └── wastehub-logo.png
    └── icons/
        ├── placeholder/         # Current Lucide icons
        └── custom/              # Future custom SVG icons
```

## 🎨 Icon System (CRITICAL)

The application uses a **drop-in icon replacement system** that allows switching from placeholder to custom icons without changing any component code.

### Current Setup (Placeholder Icons)

Using Lucide React icons as placeholders:
- Chicken House → Home icon
- Processing Plant → Factory icon
- Anaerobic Digester → FlaskConical icon
- Pyrolysis Unit → Flame icon
- Farm & Waterways → Sprout icon

### Switching to Custom Icons

1. Place your custom SVG icons in `/public/icons/custom/`
2. Name them to match the component IDs:
   - `chicken-house.svg`
   - `processing-plant.svg`
   - `anaerobic-digester.svg`
   - `pyrolysis-unit.svg`
   - `farm-waterways.svg`
3. Update `/lib/iconRegistry.ts`:
   ```typescript
   export const ICON_CONFIG: IconConfig = {
     source: 'custom', // Changed from 'placeholder'
     // ... rest stays the same
   };
   ```

**That's it!** No other code changes needed.

## 📊 Content Management

All content is stored in JSON files for easy updates without touching code.

### Updating Component Data

Edit files in `/data/components/` to update:
- Descriptions
- Key metrics
- Inputs/outputs
- Benefits
- Technical details

### Updating Benefits

Edit files in `/data/benefits/` to update:
- Economic benefits and metrics
- Environmental impact data
- Circular economy features

### Updating System Overview

Edit `/data/system/overview.json` to update:
- Current practice problems
- Proposed system benefits
- Market data and statistics

## 🎯 Key Metrics Highlighted

### Economic (Priority)
- **Carbon Credits:** $177-525/tonne CO₂
- **Biochar Sales:** $80-1,300/tonne
- **RNG Value:** $6-12/MMBTU
- **USDA Grants:** $800/tonne (NRCS 336)

### Environmental
- **GHG Reduction:** 370-660 kg CO₂-eq/tonne
- **Ammonia Reduction:** 90% with biochar bedding
- **Nutrient Recovery:** 95% P, 70% N

### Circular Economy
- **Energy Self-Sufficiency:** 100-150%
- **Methane Enhancement:** 25-37% with integration
- **Zero Waste:** 100% material utilization

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub repository
2. Import project in Vercel dashboard
3. Configure branches:
   - `main` → Production
   - `staging` → Staging environment
4. Set environment variables (if needed)
5. Deploy automatically on push

### Environment Variables

```bash
# .env.local (optional)
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation (Tab, Enter, Escape)
- ARIA labels on all interactive elements
- Screen reader compatible
- Contrast ratio: 4.5:1 minimum
- Focus indicators visible

## 📱 Responsive Design

- **Desktop (Primary):** 1920x1080, 1366x768
- **Tablet (Secondary):** 768x1024 (touch-friendly)
- **Mobile (Tertiary):** 320x568+ (simplified view)

## 🎨 Color Palette

### Flow Colors
- Energy: `#E74C3C` (red)
- Biochar: `#8E44AD` (purple)
- Water: `#3498DB` (blue)
- Material: `#27AE60` (green)
- Gas: `#F39C12` (orange)
- Manure: `#A67C52` (brown)

### UI Colors
- Primary: `#8B5A3C` (earth brown)
- Secondary: `#2D5016` (forest green)
- Accent: `#F1C40F` (highlight yellow)
- Success: `#2ECC71` (improvement green)
- Warning: `#E74C3C` (problem red)

## ⚡ Performance Targets

- Page load: <2s
- Hover response: <50ms ✅
- Click/navigation: <100ms ✅
- Target FPS: 60
- Lighthouse score: >90

## 📝 Future Enhancements

Phase 2 possibilities:
- Custom SVG icons (drop-in replacement ready)
- Interactive flow diagram with animations
- Mobile app version
- Multi-language support
- ROI calculator tool
- Video content integration

## 🤝 Support

For questions or issues:
- **Developer:** Jeff Myers
- **Client:** Calvin Wohlert (cwohlert@waste-hub.com)
- **Weekly Check-ins:** Tuesdays (screen share demos)

## 📄 License

Copyright © 2025 WasteHub. All rights reserved.

---

**Built with ❤️ by Jeff Myers for WasteHub**
