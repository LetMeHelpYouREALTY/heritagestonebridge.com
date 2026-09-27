// Ultra-minimal Edge Function that bypasses all Qwik City issues
export default async function handler(request: Request) {
  const html = `<!DOCTYPE html>
<html lang="en-us">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Heritage at Stonebridge - Las Vegas 55+ Communities</title>
  <meta name="description" content="Discover luxury 55+ active adult communities near Red Rock Canyon in Summerlin, Las Vegas. Heritage at Stonebridge offers gated living, resort amenities & stunning mountain views.">
  <link rel="canonical" href="https://heritagestonebridge.com">
  <script type="module" src="/build/qwikloader.js"></script>
</head>
<body>
  <div id="root">
    <div style="text-align: center; padding: 2rem;">
      <h1>Heritage at Stonebridge</h1>
      <p>Luxury 55+ Active Adult Living in the Heart of Summerlin, Las Vegas</p>
      <p>Loading...</p>
    </div>
  </div>
  <script type="module">
    import { qwikLoader } from '/build/qwikloader.js';
    qwikLoader();
  </script>
</body>
</html>`;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
