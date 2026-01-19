## Consent Resolve Marketing Site

Multi-page Next.js 14 website for Consent Resolve, built with the App Router
and Tailwind CSS. The homepage matches the provided marketing screenshot and
all navigation routes are scaffolded for future content.

## Requirements

- Node.js 18+
- npm 9+

## Quick Start

1. Install dependencies:
   - `npm install`
2. Run the dev server:
   - `npm run dev`
3. Open `http://localhost:3000`

## Scripts

- `npm run dev` - Run the development server
- `npm run build` - Build for production
- `npm run start` - Start the production server
- `npm run lint` - Run linting checks

## Adding New Pages

1. Create a new folder in `app/` with the route name (kebab-case recommended).
2. Add a `page.tsx` file in that folder.
3. Optional: add metadata with `export const metadata = { ... }`.

Example:

- `app/case-studies/page.tsx`

## Project Structure

- `app/` - Routes, layout, metadata, and global styles
- `components/` - Shared UI components (header, footer, layout blocks)
- `lib/` - Configuration and navigation constants
- `public/` - Static assets

## Deployment (Vercel)

This project is optimized for Vercel deployment. Import the repository in
Vercel, set any environment variables in the dashboard, and deploy.
