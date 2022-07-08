import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { AppWrapper } from "../AppWrapper";
import { NotificationsIconLocators } from "./locators";
import { NotificationsIcon } from "./NotificationsIcon";

describe("NotificationsIcon", () => {
  it("No new notifications", () => {
    const { queryByTestId } = render(
      <AppWrapper>
        <NotificationsIcon onPress={() => null} hasNewNotifications={false} />
      </AppWrapper>
    );

    expect(queryByTestId(NotificationsIconLocators.Dot)).toBeFalsy();
  });

  it("Has new notifications", () => {
    const { queryByTestId } = render(
      <AppWrapper>
        <NotificationsIcon onPress={() => null} hasNewNotifications />
      </AppWrapper>
    );

    expect(queryByTestId(NotificationsIconLocators.Dot)).toBeTruthy();
  });

  it("Passed handler was called", () => {
    const handlePress = jest.fn();

    const { getByTestId } = render(
      <AppWrapper>
        <NotificationsIcon onPress={handlePress} hasNewNotifications />
      </AppWrapper>
    );

    fireEvent.press(getByTestId(NotificationsIconLocators.Wrapper));
    expect(handlePress).toBeCalledTimes(1);
  });
});
