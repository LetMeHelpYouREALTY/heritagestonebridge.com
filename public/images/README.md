# Image Assets Guide

## Ownership

- **Holder / optimizer:** Cloudflare Images (`imagedelivery.net`) — AVIF/WebP, sized variants.
- **Backup:** git copies in `public/images/` and `public/Image/`. Custom IDs match those paths.
- **Site origin:** Vercel. Keep DNS gray-cloud (DNS-only) so SSL does not conflict.
- Sync backups to Cloudflare: `CLOUDFLARE_ACCOUNT_ID=… CLOUDFLARE_API_TOKEN=… npm run cloudflare:upload-images`
- Enable at build: `NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED=true` and `NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH` (hash is printed by the upload script). GitHub Action `Cloudflare Images Sync` does both when repo secrets exist.

## Folder Structure

```
images/
├── hero/           # Homepage hero backgrounds
├── agent/          # Dr. Jan Duffy photos
├── properties/     # Listing photos
├── neighborhoods/  # Area/community photos
├── testimonials/   # Client headshots
└── logos/          # Brand assets
```

## Recommended Specifications

| Folder         | Size       | Format    | Notes                         |
| -------------- | ---------- | --------- | ----------------------------- |
| hero/          | 1920x1080+ | WebP, JPG | 16:9 ratio, compress <200KB   |
| agent/         | 400x400+   | WebP, JPG | Square, professional headshot |
| properties/    | 1200x800+  | WebP, JPG | Landscape, MLS-quality        |
| neighborhoods/ | 1200x800+  | WebP, JPG | Scenic community shots        |
| testimonials/  | 200x200    | WebP, JPG | Square, optional              |
| logos/         | Various    | PNG, SVG  | Transparent background        |

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
import Image from "next/image";

<Image
  src="/images/hero/las-vegas-skyline.webp"
  alt="Las Vegas skyline at sunset"
  width={1920}
  height={1080}
  priority // for above-fold images
/>;
```

## Notes

- Next.js `next/image` uses the Cloudflare Images loader when enabled; otherwise it optimizes the git backup files
- WebP/AVIF preferred for web
- Always include descriptive alt text for SEO/accessibility
