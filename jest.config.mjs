import nextJest from "next/jest.js";

// next/jest: SWC se TS/JSX compile, CSS imports ignore, next.config load
const createJestConfig = nextJest({ dir: "./" });

/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom", // browser jaisa DOM, Node ke andar
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  modulePathIgnorePatterns: ["<rootDir>/.next/"], // build output ko tests mein mat ghusao
  moduleNameMapper: { "^@/(.*)$": "<rootDir>/src/$1" },
};

export default createJestConfig(config);
