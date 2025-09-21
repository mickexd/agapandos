# Technical Context: Los Agapandos Web Application

## Technology Stack and Versions
- **Frontend Framework**: Astro (latest stable version implied, will confirm if needed).
- **Language**: JavaScript/TypeScript (for Astro components and client-side logic).
- **Styling**: CSS (potentially with Tailwind CSS, based on class names).
- **Package Manager**: Bun (based on `bun.lock` file).
- **360 Panorama Viewer**: Pannellum (will be integrated as a client-side library).

## Development Environment Setup
- Node.js (compatible with Astro and Bun).
- Bun for package management.
- VS Code with Astro extensions (recommended).

## External Dependencies
- **Pannellum**: A lightweight, free, and open-source panorama viewer for the web. Loaded via CDN (https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/) for reliability and ease of integration.

## Technical Constraints and Limitations
- Performance budget for client-side JavaScript to maintain fast load times.
- Compatibility with modern browsers.
- Image optimization for faster loading of gallery assets.