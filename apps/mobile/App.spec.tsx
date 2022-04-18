import "react-native";
import React from "react";

import { render } from "@testing-library/react-native";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

// Avoid conflict with app.json
// ! Встроенный костыль в NX
// eslint-disable-next-line
// @ts-ignore
import App from "./App.tsx";

it("renders correctly", () => {
  renderer.create(<App />);
  const { getByTestId } = render(<App />);

  expect(getByTestId("heading")).toHaveTextContent("Welcome");
});
