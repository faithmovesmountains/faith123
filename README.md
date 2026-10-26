# Dinner Near Us

A mobile-first Singapore takeaway picker for a family of two adults and a toddler.

## Included

- Punggol and Bugis location switching
- Family-budget estimates
- Restaurant, hawker / food court, and takeaway-kiosk labels
- Review snapshots and toddler-friendly food notes
- Estimated dinner crowd, queue, preparation, and total pickup times
- Filters, saved-place controls, and a responsive bottom navigation

## Run locally

Install dependencies, then start the Next.js development server:

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`. The included wait and crowd figures are curated estimates—not live footfall data—and are clearly labelled in the UI.

## Main files

- `app/page.tsx` — data and interactive page
- `app/styles.css` — responsive visual system
- `preview.html` — static visual reference for the homepage
