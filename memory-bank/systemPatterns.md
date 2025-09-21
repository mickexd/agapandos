# System Patterns: Los Agapandos Web Application

## System Architecture Overview
- **Frontend**: Astro for static site generation and component-based development.
- **Styling**: Tailwind CSS (implied by class names in `seccion5.astro` and common Astro setups) or custom CSS.
- **Interactivity**: Client-side JavaScript for dynamic components, including Pannellum for 360 views.

## Key Design Patterns in Use
- **Component-Based Architecture**: Utilizing Astro components for modularity and reusability.
- **Static Site Generation (SSG)**: Leveraging Astro's capabilities for performance and SEO.
- **360 Gallery Integration**: Using Pannellum as a client-side library, integrated via a modal overlay and triggered by image clicks. Images are displayed in a CSS grid with hover effects.

## Component Relationships and Dependencies
- `src/pages/index.astro` composes various `src/components/*.astro` files and now includes global Pannellum CSS and JS.
- `src/components/seccion5.astro` now directly handles the display of 360 images in a grid and triggers the Pannellum viewer.
- `src/components/map.astro` provides an embedded Google Maps component for displaying venue location with GSAP ScrollTrigger curtain animations (top-to-bottom reveal) for title and map.

## Technical Decisions Rationale
- **Astro**: Chosen for its performance benefits, developer experience, and ability to ship zero JavaScript by default.
- **Client-side JavaScript**: Used sparingly for interactive elements to maintain performance, specifically for Pannellum and gallery interactions.
- **Pannellum**: Selected for its lightweight nature and ease of integration for 360 panorama viewing.