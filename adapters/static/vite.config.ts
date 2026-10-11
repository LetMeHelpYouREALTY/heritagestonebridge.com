import { staticAdapter } from '@builder.io/qwik-city/adapters/static/vite';
import { extendConfig } from '@builder.io/qwik-city/vite';
import baseConfig from '../../vite.config';

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ['src/entry.static.tsx', '@qwik-city-plan'],
      },
      outDir: 'dist/client',
    },
    plugins: [
      staticAdapter({
        origin: 'https://heritagestonebridge.com',
        // public/sitemap.xml is the index. The default generator overwrites it
        // with every route, including /sitemap-test/.
        sitemapOutFile: null,
      }),
    ],
  };
});
