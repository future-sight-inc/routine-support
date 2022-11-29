/* eslint-disable */
module.exports = {
  displayName: "mobile",
  resolver: "@nrwl/jest/plugins/resolver",
  preset: "react-native",
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|react-router-native)",
  ],
  moduleFileExtensions: ["ts", "js", "html", "tsx", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/test-setup.ts"],
  moduleNameMapper: {
    ".svg": "@nrwl/expo/plugins/jest/svg-mock",
  },
  transform: {
    "^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp|ttf)$": require.resolve(
      "react-native/jest/assetFileTransformer.js"
    ),
  },
};
