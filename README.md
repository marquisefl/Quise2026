# Marquise Fleming Portfolio

A modern, minimal portfolio website for Marquise Fleming, UI/UX Designer.

## Design System

- **Color Palette:** Strict black and white only
- **Typography:** Inter font family with fluid responsive sizing
- **Style:** Editorial, confident, minimal with generous whitespace
- **Motion:** Subtle, intentional animations

## Tech Stack

- **Framework:** [Astro](https://astro.build/) (v4.x)
- **Language:** TypeScript
- **Styling:** CSS with custom properties (no external CSS frameworks)
- **Fonts:** Inter via Google Fonts

## Project Structure

```
├── content-extraction/          # Content extraction documentation
│   ├── extraction-report.md     # Extraction limitations & findings
│   ├── extracted-content.json   # Structured content data
│   └── information-architecture.md  # Site architecture plan
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/                  # Project images (TODO: add images)
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── Button.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── ProjectCard.astro
│   │   └── SectionHeader.astro
│   ├── content/
│   │   └── site-data.ts         # All site content (edit here)
│   ├── layouts/
│   │   └── BaseLayout.astro     # Main page layout
│   ├── pages/
│   │   ├── index.astro          # Home page
│   │   ├── about.astro          # About page
│   │   ├── contact.astro        # Contact page
│   │   ├── experience.astro     # Resume/Experience page
│   │   └── work/
│   │       ├── index.astro      # Work listing page
│   │       └── [slug].astro     # Case study detail page
│   └── styles/
│       └── global.css           # Global styles & design tokens
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Content Management

All site content is managed in `src/content/site-data.ts`. This includes:

- Profile information
- Work history
- Education
- Skills
- Case studies
- Navigation
- Social links

### Adding Content

1. **Case Studies:** Edit the `caseStudies` array in `site-data.ts`
2. **Work History:** Edit the `workHistory` array
3. **Bio:** Update the `profile.bio` field
4. **Images:** Add images to `public/images/` and update URLs in content

### TODO Items

Content marked with `TODO:` requires user input:

- [ ] Professional headshot
- [ ] Case study content (3-5 projects)
- [ ] Contact email address
- [ ] Employment dates for all positions
- [ ] Role descriptions for each position
- [ ] Skills and tools list
- [ ] Project images and screenshots

## Content Extraction Notes

The original website (marquisefleming.com) was inaccessible during content extraction. Content was gathered from:

- LinkedIn profile (verified)
- ZoomInfo (verified)
- Behance profile (exists but blocked)

See `content-extraction/extraction-report.md` for full details.

## Accessibility

This site follows WCAG guidelines:

- Semantic HTML structure
- Proper heading hierarchy
- Focus states for interactive elements
- Alt text placeholders for images
- Color contrast (black/white exceeds 21:1)
- Keyboard navigation support
- Skip to main content (via `#main-content`)

## Performance

- Static site generation (SSG)
- Minimal JavaScript
- CSS-only animations
- Lazy loading for images
- Optimized font loading

## Deployment

The site can be deployed to any static hosting:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

```bash
npm run build
# Output in dist/ folder
```

## License

All rights reserved. Content and design for Marquise Fleming.

---

Built with [Astro](https://astro.build/)
