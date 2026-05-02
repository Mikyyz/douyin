import js from "@eslint/js";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importPlugin from "eslint-plugin-import";

export default [
  { ignores: ["dist", "node_modules"] },

  js.configs.recommended,

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.browser, React: "readonly" },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    plugins: {
      "@typescript-eslint": tsPlugin,
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
    },

    rules: {
      // ✅ TS 强化
      ...tsPlugin.configs.recommended.rules,
      ...tsPlugin.configs.strict.rules,

      // ✅ React
      ...react.configs.recommended.rules,

      // ✅ Hooks
      ...reactHooks.configs.recommended.rules,

      // ✅ Import
      ...importPlugin.configs.recommended.rules,

      // 🚀 常用增强规则
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/no-explicit-any": "warn",

      "react/react-in-jsx-scope": "off", // React17+
      "react/prop-types": "off",

      // 🚀 代码质量
      "no-console": "warn",
      "no-debugger": "error",

      // 🚀 HMR
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },

    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.d.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];
