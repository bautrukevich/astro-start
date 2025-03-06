// @ts-check
import { defineConfig, envField } from "astro/config";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      modules: {
        localsConvention: "camelCase",
      },
    },
    build: {
      sourcemap: true,
      commonjsOptions: { transformMixedEsModules: true }, // Change
    },
    server: {
      allowedHosts: ["astro-start.test"],
    },
  },

  prefetch: {
    defaultStrategy: "viewport",
  },

  env: {
    schema: {
      PUBLIC_SITE_URL: envField.string({ context: "client", access: "public" }),
    },
  },

  output: "server",

  adapter: node({
    mode: "standalone",
  }),
});
