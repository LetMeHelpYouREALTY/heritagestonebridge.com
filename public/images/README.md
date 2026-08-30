# Image Assets Guide

Git `public/images/` is the **backup of originals**. Production delivery is
**Cloudflare Images** named variants for the devices a homebuyer or homeseller
uses (phone, tablet, desktop). Do not treat `/images/...` as the public CDN URL
once `NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED=true`.

## Delivery

```
https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT>
```

| Variant | Width | Who it is for |
| --- | --- | --- |
| `phone` | 640 | Mobile buyers/sellers |
| `tablet` | 1024 | Tablet |
| `desktop` | 1920 | Laptop/desktop heroes |
| `card` | 800 | Listing/neighborhood cards |
| `og` | 1200×630 | Social/Open Graph |

Custom IDs match the git path without extension:

`/images/hero/hero-heritage-stonebridge.webp` → `images/hero/hero-heritage-stonebridge`

New heading-matched section/neighborhood photos (git originals):

- `sections/section-bhhs-office.webp`
- `sections/section-valuation.webp`
- `sections/section-new-construction.webp`
- `sections/section-relocation.webp`
- `sections/section-office-hours.webp`
- `sections/section-first-time.webp`
- `neighborhoods/neighborhood-inspirada.webp`
- `neighborhoods/neighborhood-green-valley.webp`

Every H1/H2 photograph uses an SEO `alt` of `{heading} — {scene and location}` and heroes emit ImageObject JSON-LD.

Upload (needs `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID`):

```bash
npm run images:upload
```

Then set on Vercel:

```
NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED=true
NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH=<hash printed by the upload script>
```

Heroes use `<DevicePicture>` (`phone` / `tablet` / `desktop` `<picture>` sources).
`next/image` uses `lib/cloudflare-image-loader.ts` so section cards hit the same named variants.

## Folder Structure

```
images/
├── hero/           # Page heroes (git originals)
├── sections/       # H2/H3 section photographs
├── agent/          # Brand / OG crops
├── properties/     # Listing-style exteriors
├── neighborhoods/  # Area/community photos
├── testimonials/   # Client headshots (optional)
└── logos/          # Brand assets
```

Hero files are matched to page H1 copy. Section files are resolved from H2/H3 headings via `lib/site-images.ts`. The strongest community photograph (`hero-heritage-stonebridge.webp`) is the homepage LCP hero.

Do not use a generated likeness as Dr. Jan Duffy. Open Graph uses the Heritage community photograph until a licensed agent photo is added.

## Naming Conventions

- Use lowercase with hyphens: `summerlin-aerial.webp`
- Be descriptive: `dr-jan-duffy-headshot.jpg`

## Notes

- Keep originals in git. Cloudflare Images stores the device variants.
- Always include descriptive alt text for SEO/accessibility.
- Do not orange-cloud the Vercel production hostname.
