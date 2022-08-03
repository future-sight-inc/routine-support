import React from "react";

import { render, within } from "@testing-library/react-native";
import { Text } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";

import { Layout } from "./Layout";
import { LayoutLocators } from "./locators";

jest.mock("react-native-safe-area-context");
jest.mock("../../theme");

describe("Layout", () => {
  const TITLE = "Title";
  const CHILDREN = <Text testID="children">Children</Text>;
  const FOOTER = <Text testID="footer">Footer</Text>;
  const insets: EdgeInsets = { bottom: 0, top: 0, left: 0, right: 0 };

  it("Has proper title", () => {
    const { getByTestId, debug } = render(
      <Layout insets={insets} title={TITLE} leftIcon={null}>
        {null}
      </Layout>
    );

    debug();

    expect(getByTestId(LayoutLocators.Title)).toHaveTextContent(TITLE);
  });

  it("Renders children", () => {
    const { getByTestId } = render(
      <Layout insets={insets} title={TITLE} leftIcon={null}>
        {CHILDREN}
      </Layout>
    );

    expect(within(getByTestId(LayoutLocators.Body)).getByTestId("children")).toBeTruthy();
  });

  it("Renders children", () => {
    const { getByTestId } = render(
      <Layout insets={insets} title={TITLE} footer={FOOTER} leftIcon={null}>
        {CHILDREN}
      </Layout>
    );

    expect(within(getByTestId(LayoutLocators.Footer)).getByTestId("footer")).toBeTruthy();
  });
});
