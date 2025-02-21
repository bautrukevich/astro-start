// @ts-check
import { defineConfig, envField } from "astro/config";

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
});
