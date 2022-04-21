module.exports = {
  displayName: "web",
  preset: "../../jest.preset.js",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
    },
  },
  testEnvironment: "<rootDir>/custom-text-encoder.js",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
    "node_modules/.+\\.[t|j]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../coverage/libs/models",
};
