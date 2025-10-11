import nextPlugin from "@next/eslint-plugin-next";
import unicornPlugin from "eslint-plugin-unicorn";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@next/next": nextPlugin,
      unicorn: unicornPlugin,
      prettier: prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Next.js core rules
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-sync-scripts": "error",
      "@next/next/google-font-display": "warn",
      "@next/next/google-font-preconnect": "warn",
      "@next/next/next-script-for-ga": "warn",
      "@next/next/no-img-element": "warn",
      "@next/next/no-styled-jsx-in-document": "error",

      // Critical rules that should be kept
      "react/no-unescaped-entities": "error",
      "prettier/prettier": "error",

      // Unicorn rules that are reasonable to keep
      "unicorn/explicit-length-check": "warn",
      "unicorn/no-null": "warn",
      "unicorn/no-useless-undefined": "warn",
      "unicorn/prefer-global-this": "warn",
      "unicorn/prefer-query-selector": "warn",
      "unicorn/prevent-abbreviations": [
        "error",
        {
          allowList: {
            e2e: true,
            props: true,
            ref: true,
            params: true,
            err: true,
            e: true,
            i: true,
            idx: true,
            db: true,
            id: true,
            db: true,
            env: true,
            prod: true,
            dev: true,
            src: true,
            dist: true,
            dir: true,
            ctx: true,
            req: true,
            res: true,
            fn: true,
            cb: true,
            el: true,
            ev: true,
          },
          replacements: {
            props: false,
            ref: false,
            params: false,
          },
        },
      ],

      // Disable overly strict rules
      "unicorn/no-array-callback-reference": "off",
      "unicorn/no-array-for-each": "off",
      "unicorn/no-array-reduce": "off",
      "unicorn/consistent-function-scoping": "off",
      "unicorn/no-negated-condition": "off",
      "unicorn/prefer-string-replace-all": "off",
      "unicorn/new-for-builtins": "off",
      "unicorn/no-useless-spread": "off",
      "unicorn/no-document-cookie": "off",
      "react/jsx-key": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.js"],
    rules: {
      "unicorn/prefer-module": "off",
    },
  },
  prettierConfig,
];
