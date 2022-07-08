import { render, within } from "@testing-library/react-native";
import { Layout } from "./Layout";
import React from "react";
import { LayoutLocators } from "./locators";
import { Text } from "react-native";

describe("Layout", () => {
  const TITLE = "Title";
  const CHILDREN = <Text testID="children">Children</Text>;
  const FOOTER = <Text testID="footer">Footer</Text>;

  it("Has proper title", () => {
    const { getByTestId } = render(<Layout title={TITLE}>{null}</Layout>);

    expect(getByTestId(LayoutLocators.Title)).toHaveTextContent(TITLE);
  });

  it("Renders children", () => {
    const { getByTestId } = render(<Layout title={TITLE}>{CHILDREN}</Layout>);

    expect(within(getByTestId(LayoutLocators.Body)).getByTestId("children")).toBeTruthy();
  });

  it("Renders children", () => {
    const { getByTestId } = render(
      <Layout title={TITLE} footer={FOOTER}>
        {CHILDREN}
      </Layout>
    );

    expect(within(getByTestId(LayoutLocators.Footer)).getByTestId("footer")).toBeTruthy();
  });
});
