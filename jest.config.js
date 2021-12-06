const babelConfig = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
};

module.exports = {
  transform: {
    "^.+\\.svelte$": "svelte-jester",
    "^.+\\.js$": ["babel-jest", babelConfig],
  },
  moduleFileExtensions: ["js", "svelte"],
  testPathIgnorePatterns: ["node_modules"],
  bail: false,
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "@testing-library/jest-dom",
    "jest-svelte-events/extend-expect",
    "<rootDir>/spec/setup.js",
  ],
  moduleNameMapper: {
    "^src/(.*)": "<rootDir>/src/$1",
    "^spec/(.*)": "<rootDir>/spec/$1",
  },
};
