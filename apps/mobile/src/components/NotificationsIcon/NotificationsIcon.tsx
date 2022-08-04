import React from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";

import { MobileTheme } from "../../theme";
import { NotificationsIconLocators } from "./locators";

interface NotificationsIconProps {
  onPress: () => void;
  hasNewNotifications: boolean;
}

export const NotificationsIcon: React.FC<NotificationsIconProps> = ({
  onPress,
  hasNewNotifications,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} testID={NotificationsIconLocators.Wrapper}>
      <View style={styles.wrapper}>
        <MaterialIcons name="notifications" size={30} />
        {hasNewNotifications && <View style={styles.dot} testID={NotificationsIconLocators.Dot} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    width: 30,
    height: 30,
  },
  dot: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 6,
    height: 6,
    backgroundColor: MobileTheme.palette.common.red,
    borderRadius: 3,
  },
});
