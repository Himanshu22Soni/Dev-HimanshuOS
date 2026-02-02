/**
 * Vite Configuration
 *
 * Purpose: Configure the build tool (Vite) for this React + Tailwind app.
 * Location: Project root (`vite.config.js`)
 *
 * What this file does:
 * - Enables React support (JSX + Fast Refresh)
 * - Enables Tailwind CSS via the Vite plugin
 * - Defines import aliases for cleaner absolute-style imports
 *
 * Why it exists:
 * - Vite reads this file automatically at dev/build time
 * - Centralizes tooling configuration in one place
 * - Prevents long relative paths like ../../../components
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

/**
 * Vite config export
 *
 * defineConfig() provides type hints and validation.
 * It also makes IDE autocomplete and error checking better.
 *
 * Docs: https://vite.dev/config/
 */
export default defineConfig({
  /**
   * plugins
   *
   * - react(): Enables JSX, Fast Refresh, and React-specific transforms
   * - tailwindcss(): Lets Vite process Tailwind directives (@tailwind, @apply)
   *
   * Why plugins?:
   * - Keeps build pipeline small and fast
   * - Adds React and Tailwind features without custom tooling
   */
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      /**
       * Absolute import aliases
       *
       * Why?:
       * - Shorter and cleaner imports
       * - Avoids brittle relative paths (../../../)
       * - Easier refactors when moving files
       *
       * Example usage:
       * import Button from "#components/Button";
       */
      "#components": resolve(
        dirname(fileURLToPath(import.meta.url)),
        "src/components",
      ),
      "#constants": resolve(
        dirname(fileURLToPath(import.meta.url)),
        "src/constants",
      ),
      "#store": resolve(dirname(fileURLToPath(import.meta.url)), "src/store"),
      "#hoc": resolve(dirname(fileURLToPath(import.meta.url)), "src/hoc"),
      "#windows": resolve(
        dirname(fileURLToPath(import.meta.url)),
        "src/windows",
      ),
    },
  },
});
