import eslintPluginAstro from "eslint-plugin-astro";
export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
    processor: "astro/client-side-ts", // <- Uses the "client-side-ts" processor.
    // Define the configuration for `.astro` file.
    files: ["*.astro"],
    // Allows Astro components to be parsed.
    parser: "astro-eslint-parser",
    // Parse the script in `.astro` as TypeScript by adding the following configuration.
    // It's the setting you need when using TypeScript.
    parserOptions: {
      parser: "@typescript-eslint/parser",
      extraFileExtensions: [".astro"],
    },
  },
];
