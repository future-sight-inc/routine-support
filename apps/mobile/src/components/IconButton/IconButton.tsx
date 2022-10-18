import React from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { PressableProps, StyleSheet, TouchableOpacity, View } from "react-native";

import { MobileTheme } from "../../theme";

type ButtonIcon = "settings" | "qr-code";

interface ButtonProps extends PressableProps {
  icon: ButtonIcon;
  disabled?: boolean;
}

export const IconButton: React.FC<ButtonProps> = ({ icon, disabled, style, ...props }) => {
  return (
    <TouchableOpacity {...props} disabled={disabled}>
      <View
        style={[
          styles.button,
          style,
        ]}
      >
        <MaterialIcons name={icon} size={16} color={MobileTheme.palette.primary.text} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: MobileTheme.palette.secondary.main,
    borderRadius: MobileTheme.borderRadius.s,
  },
});
