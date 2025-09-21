# System Patterns: Los Agapandos Website

## System Architecture Overview
The Los Agapandos website is built using Astro, a modern static site builder. Components are developed as `.astro` files, leveraging Astro's island architecture for client-side interactivity. Styling is primarily handled by Tailwind CSS, ensuring a consistent and utility-first approach. Client-side animations are implemented using GSAP and ScrollTrigger.

## Key Design Patterns in Use
- **Component-Based Architecture:** The website is structured into reusable Astro components (e.g., `seccion1.astro`, `seccion2.astro`).
- **Utility-First CSS (Tailwind CSS):** Styling is applied directly in the markup using Tailwind classes, promoting rapid development and consistency.
- **Client-Side Interactivity (GSAP):** Animations and dynamic behaviors are implemented using GSAP, often triggered by ScrollTrigger for scroll-based effects.
- **Image Carousel (Swiper.js):** For displaying image galleries, Swiper.js is used with its traditional `div` structure and JavaScript initialization, configured with the "coverflow" effect.

## Component Relationships and Dependencies
- `src/components/seccion4.astro` depends on Swiper.js (via CDN) for its carousel functionality.
- All `.astro` components implicitly depend on Tailwind CSS for styling.
- `seccion1.astro`, `seccion2.astro`, and `seccion3.astro` use GSAP and ScrollTrigger for animations.

## Technical Decisions Rationale
- **Astro Framework:** Chosen for its performance benefits (minimal client-side JavaScript by default) and developer experience.
- **Tailwind CSS:** Selected for its utility-first approach, which speeds up UI development and maintains design consistency.
- **Swiper.js (Traditional Setup):** Opted for the traditional `div` and JavaScript initialization over Web Components due to better control and compatibility within the Astro environment, and to resolve TypeScript issues.
- **GSAP & ScrollTrigger:** Used for rich, performant animations that enhance user engagement.