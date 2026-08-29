# Image Assets Guide

## Folder Structure

```
images/
├── hero/           # Page heroes (16:9 WebP)
├── sections/       # H2/H3 section photographs
├── agent/          # Brand / OG crops
├── properties/     # Listing-style exteriors
├── neighborhoods/  # Area/community photos
├── testimonials/   # Client headshots (optional)
└── logos/          # Brand assets
```

Hero files are generated to match page H1 copy. Section files are resolved from H2/H3 headings via `lib/site-images.ts`. The strongest community photograph (`hero-heritage-stonebridge.webp`) is the homepage LCP hero.

Do not use a generated likeness as Dr. Jan Duffy. Open Graph uses the Heritage community photograph until a licensed agent photo is added.


## Recommended Specifications

| Folder | Size | Format | Notes |
|--------|------|--------|-------|
| hero/ | 1920x1080+ | WebP, JPG | 16:9 ratio, compress <200KB |
| agent/ | 400x400+ | WebP, JPG | Square, professional headshot |
| properties/ | 1200x800+ | WebP, JPG | Landscape, MLS-quality |
| neighborhoods/ | 1200x800+ | WebP, JPG | Scenic community shots |
| testimonials/ | 200x200 | WebP, JPG | Square, optional |
| logos/ | Various | PNG, SVG | Transparent background |

## Naming Conventions

- Use lowercase with hyphens: `summerlin-aerial.webp`
- Be descriptive: `dr-jan-duffy-headshot.jpg`
- Include size if multiple: `hero-desktop.webp`, `hero-mobile.webp`

## Image Optimization

Before uploading, optimize images:

1. **Online tools**: [Squoosh](https://squoosh.app), [TinyPNG](https://tinypng.com)
2. **CLI**: `npx @squoosh/cli --webp '{"quality":80}' image.jpg`
3. **Target**: <200KB for hero, <100KB for thumbnails

## Usage in Code

```tsx
import Image from 'next/image'

<Image 
  src="/images/hero/las-vegas-skyline.webp"
  alt="Las Vegas skyline at sunset"
  width={1920}
  height={1080}
  priority // for above-fold images
/>
```

## Notes

- Next.js auto-optimizes images via `next/image`
- WebP preferred for web (30% smaller than JPEG)
- Always include descriptive alt text for SEO/accessibility
