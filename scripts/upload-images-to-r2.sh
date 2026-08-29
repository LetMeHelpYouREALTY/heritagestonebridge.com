#!/usr/bin/env bash
# Upload public/Image and public/images to the R2 bucket used by
# workers/images.ts. Requires wrangler auth (CLOUDFLARE_API_TOKEN +
# CLOUDFLARE_ACCOUNT_ID). Local-only: pass --local.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BUCKET="${CLOUDFLARE_R2_BUCKET:-heritagestonebridge-images}"
LOCAL_FLAG=()
MODE="remote"
if [[ "${1:-}" == "--local" ]]; then
  LOCAL_FLAG=(--local)
  MODE="local"
fi

mime_for() {
  case "${1##*.}" in
    jpg|jpeg|JPG|JPEG) echo "image/jpeg" ;;
    png|PNG) echo "image/png" ;;
    webp|WEBP) echo "image/webp" ;;
    avif|AVIF) echo "image/avif" ;;
    gif|GIF) echo "image/gif" ;;
    svg|SVG) echo "image/svg+xml" ;;
    *) echo "application/octet-stream" ;;
  esac
}

count=0
while IFS= read -r -d '' file; do
  rel="${file#"${ROOT}/public/"}"
  ctype="$(mime_for "$file")"
  echo "put ${BUCKET}/${rel} (${ctype})"
  npx wrangler r2 object put "${BUCKET}/${rel}" \
    --file="$file" \
    --content-type="$ctype" \
    "${LOCAL_FLAG[@]}"
  count=$((count + 1))
done < <(find "${ROOT}/public/Image" "${ROOT}/public/images" -type f \
  \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' -o -iname '*.webp' \
     -o -iname '*.avif' -o -iname '*.gif' -o -iname '*.svg' \) -print0)

echo "Uploaded ${count} objects to ${BUCKET} (${MODE})"
