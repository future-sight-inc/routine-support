import { storiesOf } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";
import { NotificationsIcon } from "./NotificationsIcon";

storiesOf("Components", module).add("NotificationsIcon", () => {
  return (
    <View>
      <NotificationsIcon onPress={() => null} hasNewNotifications={false} />
      <NotificationsIcon onPress={() => null} hasNewNotifications />
    </View>
  );
});
