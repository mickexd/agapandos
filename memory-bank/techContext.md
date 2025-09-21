# Technical Context: Los Agapandos Website

## Technology Stack and Versions
- **Framework:** Astro (latest stable version)
- **Styling:** Tailwind CSS (latest stable version)
- **JavaScript Libraries:**
    - Swiper.js (v11, loaded via CDN)
    - GSAP (latest stable version)
    - ScrollTrigger (GSAP plugin)
    - Lenis (for smooth scrolling, used in `seccion3.astro`)
- **Language:** TypeScript (for Astro components and client-side scripts)

## Development Environment Setup
- Node.js and npm/bun for package management.
- Astro CLI for project setup and development server.
- VS Code with Astro and Tailwind CSS extensions for enhanced development experience.

## External Dependencies
- Swiper.js CSS and JS bundles from CDN (`https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css`, `https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js`).
- Google Fonts (Aguafina Script, Poppins - implicitly used through global CSS or Tailwind config).

## Technical Constraints and Limitations
- **Astro's Island Architecture:** Requires careful consideration of where client-side JavaScript runs and how it interacts with server-rendered HTML.
- **Global Scripting:** Direct manipulation of global variables from CDN-loaded scripts might require TypeScript declarations (e.g., `declare var Swiper: any;`).
- **Styling Conflicts:** Global CSS can conflict with Tailwind CSS; scoped styles or Tailwind utilities are preferred.