import React from "react";

import { render } from "@testing-library/react-native";

import { ErrorMessage } from "./ErrorMessage";

describe("ErrorMessage", () => {
  it("It renders proper text", () => {
    const TEXT = "Error message";
    const { getByText } = render(<ErrorMessage>{TEXT}</ErrorMessage>);

    expect(getByText(TEXT)).toBeTruthy();
  });
});
