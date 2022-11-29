/* eslint-disable */
module.exports = {
  displayName: "web",
  preset: "../../jest.preset.js",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
    },
  },
  transform: {
    "^.+\\.[t|j]sx?$": ["babel-jest", { presets: ["@nrwl/react/babel"] }],
    "node_modules/.+\\.[t|j]sx?$": ["babel-jest", { presets: ["@nrwl/react/babel"] }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../coverage/libs/models",
};
