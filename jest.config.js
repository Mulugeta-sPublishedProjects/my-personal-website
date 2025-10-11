const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./", // Path to your Next.js app
});

const config = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  // An array of file extensions your modules use
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/app/(.*)$": "<rootDir>/src/app/$1",
    "^@/lib/(.*)$": "<rootDir>/src/lib/$1",
    "^@/styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@/public/(.*)$": "<rootDir>/public/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },

  // A list of paths to directories that Jest should use to search for files in
  roots: ["<rootDir>/src"],

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/__tests__/**/*.test.[jt]s?(x)"],

  // An array of regexp pattern strings that are matched against all test paths before executing the test
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],

  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },

  // An array of regexp pattern strings that are matched against all source file paths before transformation
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],

  // Indicates whether each individual test should be reported during the run
  verbose: true,
};

module.exports = createJestConfig(config);
