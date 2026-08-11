# AGENTS.md - Pix3 Development Guide

## Project Overview

Pix3 is a landing page website for a WebGL playable-ads engine that supports both 2D and 3D content through a unified Three.js pipeline. The project uses Vite for building and Tailwind CSS v4. It is deployed to GitHub Pages.

## Project Structure

```
pix3dev/
├── generate-pages.js       # SOURCE OF TRUTH for markup + copy (all locales)
├── src/
│   ├── index.html          # GENERATED — do not hand-edit
│   ├── ru/index.html       # GENERATED — do not hand-edit
│   └── style.css          # design tokens + component styles (Tailwind v4)
├── public/
│   ├── fonts/              # self-hosted variable WOFF2 subsets
│   └── media/              # Static assets (copied to dist/)
├── dist/                   # Build output (deployed to GitHub Pages)
├── postcss.config.js       # PostCSS configuration
├── vite.config.js         # Vite configuration
└── .github/
    └── workflows/
        └── static.yml      # GitHub Pages deployment workflow
```

## Build / Development Commands

### Running Locally

```bash
npm run dev     # Start development server
npm run preview # Preview production build locally
```

### Building for Production

```bash
npm run build   # Build to dist/ folder
```

### Deployment

The site automatically builds and deploys to GitHub Pages on push to main branch via the workflow in `.github/workflows/static.yml`.

To manually trigger deployment:
1. Go to GitHub Actions tab
2. Select "Deploy static content to Pages"
3. Click "Run workflow"

### Testing

**No tests exist** for this static site. If tests are added in the future, run them with:

```bash
npm test              # Run all tests
npm test -- --grep "pattern"  # Run tests matching pattern
```

## Code Style Guidelines

### General Principles

- Keep changes minimal and focused
- Never hand-edit `src/index.html` or `src/ru/index.html` — they are regenerated from `generate-pages.js` on every dev/build run
- Maintain the dark theme aesthetic; take colours from the tokens in `src/style.css` (`--bg`, `--fg`, `--amber`, `--mint`), never from a literal
- Preserve semantic HTML structure
- Ensure responsive design works on mobile/desktop

### HTML Guidelines

1. **Doctype & Structure**: Use HTML5 doctype, maintain proper head/body structure
2. **Accessibility**: Include alt text for all images, use semantic elements (nav, section, footer); keep heading levels sequential (h1 → h2 → h3, never skip), and give every image `width`/`height`
3. **Classes**: Use the semantic component classes from `src/style.css` (`.btn.p`, `.card`, `.eyebrow`, `.head`) and the helper functions in `generate-pages.js` — do not paste markup or reach for utilities that duplicate them
4. **Colors**: Only `var(--token)`. New translucent shades become a derived `:root` token via `color-mix()`
5. **Font Families**: `--ff-d` Space Grotesk (headings/buttons), `--ff-b` IBM Plex Sans (body), `--ff-m` JetBrains Mono (labels/numbers)
6. **Copy**: All user-visible text lives in the `strings` dictionary in `generate-pages.js`, in **every** locale — see the i18n fallback rules in CLAUDE.md

### CSS Guidelines

- Custom styles go in `src/style.css`
- Tailwind v4 uses CSS-based configuration with `@theme` directive
- Avoid duplicating Tailwind utility classes
- Maintain the dark theme colors from the design system

### JavaScript Guidelines

- Inline JavaScript is acceptable for simple interactions
- Use vanilla JavaScript - no frameworks
- Keep scripts minimal and performant
- Place external scripts (analytics, etc.) in the head as deferred

### Image & Media Guidelines

- Place static assets in `public/media/` (not `src/`)
- Use appropriate formats: JPG for photos, PNG for graphics with transparency
- Include descriptive alt text for accessibility
- Keep file sizes reasonable for fast loading
- After adding new images, run `npm run build` to copy them to dist/

### Git & Commit Guidelines

- Create descriptive commit messages
- Keep commits focused and atomic
- Push to main branch triggers automatic deployment (after build succeeds)

### Error Handling

- Ensure all external CDN links are valid (fonts, analytics)
- Test locally with `npm run build` before committing
- Verify all images load correctly in the built output

## External Dependencies

- **Tailwind CSS v4**: Built via Vite + PostCSS (no CDN)
- **Fonts**: Space Grotesk, IBM Plex Sans, JetBrains Mono — all self-hosted in `public/fonts/`, no Google Fonts request at runtime
- **YouTube**: the hero demo embed (`youtube-nocookie`) is injected only after the visitor clicks play
- **Yandex Metrika**: Analytics tracking (loaded on idle after first paint)

## Common Tasks

### Adding a New Section

1. Add the copy to `strings.en` in `generate-pages.js`, then translate it in `strings.ru` (untranslated keys fall back to English rather than blanking)
2. Add the markup to `renderPage()` using a semantic element and the existing components (`sectionHead()`, `card`, `btn()`); add `class="reveal"` for the scroll-in
3. Style with tokens in `src/style.css`; if the section needs a new colour shade, derive it with `color-mix()` into a `:root` token
4. Test responsive behaviour with `npm run dev` at 1440 / 1024 / 768 / 390 — nothing may scroll horizontally

### Updating Styles

1. For Tailwind-based styles: Add classes to HTML elements
2. For custom CSS: Edit `src/style.css`
3. For new Tailwind utilities: Add to the `@theme` block in `src/style.css`

### Adding Images

1. Place optimized image in `public/media/` folder
2. Reference with relative path: `src="media/filename.ext"` (Vite handles the path correctly)
3. Always include descriptive alt text
4. Run `npm run build` to verify the image is copied to dist/

## Notes for AI Agents

- This is a static site built with Vite - changes require a build step
- Tailwind v4 uses CSS-based configuration (not JS config file)
- Always run `npm run build` to verify changes before committing
- The build output goes to `dist/` which is what gets deployed
