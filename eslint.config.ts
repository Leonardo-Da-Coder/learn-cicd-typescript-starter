import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import pluginSecurity from "eslint-plugin-security";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Node.js-Globals wie process erlauben
      },
    },
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  tseslint.configs.recommended,
  pluginSecurity.configs.recommended,
]);