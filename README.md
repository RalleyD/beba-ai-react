# BEBA AI Website

A professional, interactive, and mobile-first website for BEBA AI - a healthcare-first AI technology company specializing in ethical AI governance and innovative SaaS solutions for dementia care.

## 🚀 Features

- **Modern Tech Stack**: React 18+ with TypeScript, Tailwind CSS, and Framer Motion
- **Mobile-First Design**: Fully responsive across all devices (320px to 4K)
- **Interactive Platform Demo**: Showcase of the Gilly-CLARITY integration
- **Seven Pillars Framework**: Comprehensive ethical AI governance pages
- **Performance Optimized**: Code splitting, lazy loading, and optimized animations

## 📋 Pages

1. **Home**: Hero section, statistics, mission statement, and featured product preview
2. **Platform Demo**: Interactive showcase of the Gilly-CLARITY dementia care pathway
3. **Seven Pillars**: Detailed explanation of BEBA AI's ethical AI framework
4. **Products & Services**: CLARITY platform, GP dashboard, and AI governance services
5. **About Us**: Company story, founder profiles, and values

## 🛠️ Tech Stack

- **React 18.2** - Modern React with hooks and concurrent features
- **TypeScript 4.9** - Type-safe development
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Framer Motion 10** - Smooth animations and transitions
- **React Router 6** - Client-side routing
- **Lucide React** - Beautiful icon set

## 🎨 Design System

### Colors
- **Primary Pink**: `#FF1B8D` (beba-pink)
- **Primary Blue**: `#0D7FDC` (beba-blue)
- **Accent Cyan**: `#00D9FF` (beba-cyan)
- **Dark Purple**: `#2D1B3D` (beba-purple)
- **Light Purple**: `#4A2F5A` (beba-purple-light)

### Typography
- **Display Font**: Exo 2 (headings)
- **Body Font**: Inter (body text)

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

Builds the app for production to the `build` folder.

### Test

```bash
npm test
```

Launches the test runner in interactive watch mode.

## 📁 Project Structure

```
/app
├── public/                 # Static assets
│   ├── index.html
│   ├── manifest.json
│   └── logo.jpg
├── src/
│   ├── components/         # React components
│   │   ├── common/        # Reusable components
│   │   ├── layout/        # Layout components (Navbar, Footer)
│   │   ├── home/          # Home page components
│   │   ├── pillars/       # Pillars page components
│   │   ├── products/      # Products page components
│   │   ├── about/         # About page components
│   │   └── platform-demo/ # Platform demo components
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components
│   ├── types/             # TypeScript type definitions
│   ├── App.tsx            # Main app component
│   ├── index.tsx          # Entry point
│   └── index.css          # Global styles
├── package.json
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎯 Key Components

### Common Components
- `Button`: Versatile button with variants and sizes
- `Card`: Flexible card component with hover effects
- `AnimatedSection`: Wrapper for scroll-triggered animations
- `LoadingScreen`: Full-screen loading indicator

### Layout Components
- `Navbar`: Responsive navigation with mobile drawer
- `Footer`: Site-wide footer with links and contact info
- `Layout`: Main layout wrapper

### Custom Hooks
- `useMediaQuery`: Responsive breakpoint detection
- `useScrollAnimation`: Scroll-triggered animation control
- `useSwipe`: Swipe gesture detection for mobile

## 📱 Mobile Optimization

- Touch-friendly 44x44px minimum targets
- Swipeable carousels and cards
- Mobile-first responsive design
- Optimized animations for mobile performance
- Safe area padding for notched devices

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Reduced motion support

## 🎨 Brand Guidelines

### Voice & Tone
- Professional yet warm
- Confident yet humble
- Technical yet accessible
- Innovative yet responsible

### Visual Identity
- Circuit-board brain motifs
- Pink-to-blue gradients
- Neural network patterns
- Healthcare + tech aesthetic

## 📊 Performance

- Code splitting for optimal bundle size
- Lazy loading of pages and images
- Optimized animations with Framer Motion
- Lighthouse score targets: 90+ across all metrics

## 🔒 Security

- TypeScript strict mode
- Content Security Policy ready
- No sensitive data in client code
- Secure external link handling

## 📝 License

© 2025 BEBA AI. All rights reserved.

---

**Tagline**: "Responsible AI is not an option — it is our identity."

**Mission**: Intelligence • Innovation • Integrity
