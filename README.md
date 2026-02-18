# FreshCart

FreshCart is a modern e-commerce web application for groceries and everyday essentials. It provides a fast, mobile‑friendly shopping experience with product browsing, cart, wishlist, orders, user profile and checkout flows.

## Key features

- Product listing, categories and brand pages
- Product detail page with image gallery and reviews
- Cart with quantity controls and order summary
- Wishlist management
- User profile, addresses and order history
- Contact form, About and Policy pages
- Responsive UI and accessible components

## Tech stack

- Next.js (App Router) — React + Server Components
- TypeScript
- Tailwind CSS for styling
- Redux for global state
- @tanstack/react-query for data fetching & caching
- next/image for optimized images
- Font Awesome for icons
- react-hot-toast for notifications
- Fetch API for server routes (/api)
- Node.js runtime (Next.js server)

## Project structure (high level)

- src/features — domain features (home, cart, wishlist, orders, profile, etc.)
- src/components — shared UI components (navbar, footer, cards)
- src/app — Next.js routes and static pages
- src/store — Redux store and slices
- src/utils — shared types and helpers

## Local development

1. Install dependencies
   - npm install
   - or yarn / pnpm

2. Run dev server
   - npm run dev

3. Build & production
   - npm run build
   - npm start

Common scripts (package.json)

- dev — start development server
- build — compile production build
- start — run production server
- lint/test — (if configured)

## Environment

Create a .env file with any required keys (API endpoints, auth tokens, etc.). Example:

```
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Contributing

- Open issues for bugs and feature requests.
- Create focused PRs with a clear description and testing notes.

## License & contact

This project is provided as-is. For questions or support, reach out to the project owner or use the Contact page in the app.
