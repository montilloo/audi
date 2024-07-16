// eslint.config.js
import eslintConfigPrettier from "eslint-config-prettier";
import js from "@eslint/js";

export default [
	js.configs.recommended,
	{
		rules: {
			semi: "error",
			"prefer-const": "error",
		}
	},
  eslintConfigPrettier,
];