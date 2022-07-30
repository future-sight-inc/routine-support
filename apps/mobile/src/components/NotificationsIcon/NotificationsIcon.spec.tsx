import React from "react";

import { fireEvent, render } from "@testing-library/react-native";

import { NotificationsIconLocators } from "./locators";
import { NotificationsIcon } from "./NotificationsIcon";

jest.mock("../../theme");

describe("NotificationsIcon", () => {
  it("No new notifications", () => {
    const { queryByTestId } = render(
      <NotificationsIcon onPress={() => null} hasNewNotifications={false} />
    );

    expect(queryByTestId(NotificationsIconLocators.Dot)).toBeFalsy();
  });

  it("Has new notifications", () => {
    const { queryByTestId } = render(
      <NotificationsIcon onPress={() => null} hasNewNotifications />
    );

    expect(queryByTestId(NotificationsIconLocators.Dot)).toBeTruthy();
  });

  it("Passed handler was called", () => {
    const handlePress = jest.fn();

    const { getByTestId } = render(<NotificationsIcon onPress={handlePress} hasNewNotifications />);

    fireEvent.press(getByTestId(NotificationsIconLocators.Wrapper));
    expect(handlePress).toBeCalledTimes(1);
  });
});
