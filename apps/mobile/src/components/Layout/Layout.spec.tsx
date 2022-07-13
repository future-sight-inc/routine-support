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
  const insets: EdgeInsets = { bottom: 0, top: 0, left: 0, rigth: 0 };

  it("Has proper title", () => {
    const { getByTestId, debug } = render(
      <Layout
        insets={insets}
        title={TITLE}
        hasNewNotifications={false}
        onMenuIconPress={() => null}
        onNotificationsIconPress={() => null}
      >
        {null}
      </Layout>
    );

    debug();

    expect(getByTestId(LayoutLocators.Title)).toHaveTextContent(TITLE);
  });

  it("Renders children", () => {
    const { getByTestId } = render(
      <Layout
        insets={insets}
        title={TITLE}
        hasNewNotifications={false}
        onMenuIconPress={() => null}
        onNotificationsIconPress={() => null}
      >
        {CHILDREN}
      </Layout>
    );

    expect(within(getByTestId(LayoutLocators.Body)).getByTestId("children")).toBeTruthy();
  });

  it("Renders children", () => {
    const { getByTestId } = render(
      <Layout
        insets={insets}
        title={TITLE}
        footer={FOOTER}
        hasNewNotifications={false}
        onMenuIconPress={() => null}
        onNotificationsIconPress={() => null}
      >
        {CHILDREN}
      </Layout>
    );

    expect(within(getByTestId(LayoutLocators.Footer)).getByTestId("footer")).toBeTruthy();
  });
});
