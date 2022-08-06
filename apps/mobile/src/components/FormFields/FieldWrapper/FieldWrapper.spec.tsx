import React from "react";

import { render } from "@testing-library/react-native";
import { View } from "react-native";

import { FieldWrapper } from "./FieldWrapper";
import { FieldWrapperLocators } from "./locators";

describe("FieldWrapper", () => {
  it("Has no label, has no error", () => {
    const CHILD = <View testID={"Child"} />;
    const { getByTestId, queryByTestId } = render(<FieldWrapper>{CHILD}</FieldWrapper>);

    expect(getByTestId("Child")).toBeTruthy();
    expect(queryByTestId(FieldWrapperLocators.Label)).toBeFalsy();
    expect(queryByTestId(FieldWrapperLocators.Error)).toBeFalsy();
  });

  it("Has label, has no error", () => {
    const CHILD = <View testID={"Child"} />;
    const LABEL_TEXT = "Label";
    const { getByTestId, queryByTestId } = render(
      <FieldWrapper label={LABEL_TEXT}>{CHILD}</FieldWrapper>
    );

    expect(getByTestId("Child")).toBeTruthy();
    expect(queryByTestId(FieldWrapperLocators.Label)).toHaveTextContent(LABEL_TEXT);
    expect(queryByTestId(FieldWrapperLocators.Error)).toBeFalsy();
  });

  it("Has no label, has error", () => {
    const CHILD = <View testID={"Child"} />;
    const ERROR_TEXT = "Error";
    const { getByTestId, queryByTestId } = render(
      <FieldWrapper error={ERROR_TEXT}>{CHILD}</FieldWrapper>
    );

    expect(getByTestId("Child")).toBeTruthy();
    expect(queryByTestId(FieldWrapperLocators.Label)).toBeFalsy();
    expect(queryByTestId(FieldWrapperLocators.Error)).toHaveTextContent(ERROR_TEXT);
  });

  it("Has label, has no error", () => {
    const CHILD = <View testID={"Child"} />;
    const LABEL_TEXT = "Label";
    const ERROR_TEXT = "Error";
    const { getByTestId, queryByTestId } = render(
      <FieldWrapper label={LABEL_TEXT} error={ERROR_TEXT}>
        {CHILD}
      </FieldWrapper>
    );

    expect(getByTestId("Child")).toBeTruthy();
    expect(queryByTestId(FieldWrapperLocators.Label)).toHaveTextContent(LABEL_TEXT);
    expect(queryByTestId(FieldWrapperLocators.Error)).toHaveTextContent(ERROR_TEXT);
  });
});
