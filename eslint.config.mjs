import { fileURLToPath, URL } from "node:url";
import { includeIgnoreFile } from "@eslint/compat";
import { defineConfig } from "eslint/config";

// Configs
import fdawgs from "@fdawgs/eslint-config";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

const config = defineConfig([
	// Include ignore file to prevent linting of files in .gitignore
	includeIgnoreFile(gitignorePath),
	{
		files: ["**/*.js", "**/*.jsx"],
		extends: [fdawgs],
	},
]);

export default config;
