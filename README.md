# Codrithm — Intelligent Software, Beautifully Engineered

![Codrithm Banner](https://img.shields.io/badge/Codrithm-The%20Future-87FFBC?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMSA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDMgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjODdGRkJDIi8+Cjwvc3ZnPg==)

A premium AI, ML and full-stack engineering studio website built with modern web technologies. Codrithm showcases intelligent software solutions through an immersive, future-ready digital experience.

## 🚀 Overview

Codrithm is a global studio of engineers, researchers and designers building premium AI systems and full-stack products for ambitious teams. This repository contains the studio's official website featuring:

- **Interactive 3D experiences** with Three.js and React Three Fiber
- **Premium UI/UX** with Tailwind CSS and Radix UI components  
- **Advanced animations** powered by Framer Motion and GSAP
- **Modern React architecture** using TanStack Start and React Router
- **Type-safe development** with TypeScript throughout

## ✨ Features

- 🎯 **Immersive Hero Section** - 3D logo animation and interactive elements
- 🔮 **AI-First Design** - Showcasing ML, LLM, and AI development capabilities
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Performance Optimized** - Lazy loading, code splitting, and modern bundling
- 🎨 **Premium Animations** - Smooth micro-interactions and page transitions
- 🌐 **SEO Ready** - Meta tags, OpenGraph, and sitemap generation
- 🔧 **Type Safety** - Full TypeScript coverage with strict configuration
- 🎪 **Component Library** - Reusable UI components with shadcn/ui

## 🛠️ Tech Stack

### Core Framework
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[TanStack Start](https://tanstack.com/start)** - Full-stack React framework
- **[TanStack Router](https://tanstack.com/router)** - Type-safe routing
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and developer experience

### Styling & UI
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, reusable components
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### 3D & Animation
- **[Three.js](https://threejs.org/)** - 3D graphics library
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber)** - React renderer for Three.js
- **[React Three Drei](https://drei.pmnd.rs/)** - Useful helpers for R3F
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library
- **[GSAP](https://greensock.com/gsap/)** - Professional animation library

### Forms & Data
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[TanStack Query](https://tanstack.com/query)** - Data fetching and caching

### Development Tools
- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server
- **[ESLint](https://eslint.org/)** - Code linting and quality
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Bun](https://bun.sh/)** - Fast JavaScript runtime and package manager

## 📦 Installation

### Prerequisites
- **Node.js** 18+ or **Bun** (recommended)
- **Git**

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/codrithm-future.git
   cd codrithm-future
   ```

2. **Install dependencies**
   ```bash
   # Using Bun (recommended)
   bun install
   
   # Or using npm
   npm install
   ```

3. **Start development server**
   ```bash
   # Using Bun
   bun dev
   
   # Or using npm
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
codrithm-future/
├── src/
│   ├── assets/           # Static assets (images, 3D models)
│   ├── components/       # Reusable React components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── BackgroundFX.tsx
│   │   ├── LogoScene.tsx # 3D logo component
│   │   └── ...
│   ├── hooks/           # Custom React hooks
│   ├── lib/            # Utility functions and configurations
│   ├── routes/         # Page components and routing
│   │   ├── index.tsx   # Homepage
│   │   ├── about.tsx   # About page
│   │   ├── services.tsx # Services page
│   │   └── ...
│   ├── router.tsx      # Router configuration
│   └── styles.css      # Global styles
├── public/             # Public assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 📱 Pages & Routes

- **`/`** - Homepage with hero, services, featured work
- **`/about`** - Company story, timeline, team
- **`/services`** - AI, ML, and development services
- **`/portfolio`** - Featured projects and case studies
- **`/careers`** - Open positions and culture
- **`/community`** - Developer community and resources
- **`/contact`** - Get in touch form

## 🎨 Design System

### Colors
- **Primary**: `#87FFBC` (Neon Green) 
- **Secondary**: `#0066FF` (Neon Blue)
- **Accent**: Gradients combining primary and secondary
- **Background**: Dynamic dark theme with glass morphism

### Typography
- **Display**: Custom font for headlines and branding
- **Body**: System fonts optimized for readability
- **Code**: Monospace fonts for technical content

### Components
All components follow the shadcn/ui design system with custom theming:
- Glass morphism cards (`TiltCard`)
- Animated reveal components (`Reveal`)
- Gradient text effects (`text-gradient`)
- Neon glow effects (`glow-green`, `glow-blue`)

## 🚀 Build & Deployment

### Development
```bash
bun dev          # Start development server
bun lint         # Run ESLint
bun format       # Format code with Prettier
```

### Production
```bash
bun build        # Build for production
bun preview      # Preview production build
```

### Build Outputs
- **Client**: Optimized static assets
- **Server**: Server-side rendering capabilities
- **Assets**: Compressed images and 3D models

## 🔧 Configuration

### Tailwind CSS
Custom configuration with:
- Extended color palette with neon colors
- Glass morphism utilities
- Grid and animation utilities
- Custom font families

### TypeScript
Strict configuration with:
- Path mapping for clean imports
- Strict type checking
- Modern ES features

### Vite
Optimized build configuration:
- React plugin for fast refresh
- TanStack router plugin
- Asset optimization
- Code splitting

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes and test thoroughly
4. Commit with conventional commits: `git commit -m "feat: add new feature"`
5. Push and create a Pull Request

### Code Standards
- Follow TypeScript best practices
- Use semantic HTML and accessible components
- Write meaningful commit messages
- Test your changes across devices
- Maintain design system consistency

## 📄 License

This project is proprietary software. All rights reserved to Codrithm Studio.

## 🌟 About Codrithm

**Mission**: Make advanced AI feel simple, useful, and trustworthy for real teams.

**Vision**: A world where software understands intent, not just instructions.

**Values**: Craft. Curiosity. Candor. Ship things worth using.

---

### 📞 Get in Touch

- **Website**: [codrithm.studio](https://codrithm.studio)
- **Community**: Join our global network of 12k+ builders
- **Projects**: Ready to build something unforgettable?

---

<div align="center">
  <img src="https://img.shields.io/badge/Built%20with-❤️-red.svg?style=flat-square" alt="Built with love" />
  <img src="https://img.shields.io/badge/AI%20First-🤖-87FFBC.svg?style=flat-square" alt="AI First" />
  <img src="https://img.shields.io/badge/Future%20Ready-🚀-0066FF.svg?style=flat-square" alt="Future Ready" />
</div>

**Codrithm** — Architecting the intelligent web, one algorithm at a time.