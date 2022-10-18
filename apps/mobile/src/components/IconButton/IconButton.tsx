import React, { useState } from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { GestureResponderEvent, Pressable, PressableProps, StyleSheet } from "react-native";

import { MobileTheme } from "../../theme";

type ButtonIcon = "settings" | "qr-code";

interface ButtonProps extends PressableProps {
  icon: ButtonIcon;
  disabled?: boolean;
}

export const IconButton: React.FC<ButtonProps> = ({
  icon,
  disabled,
  style,
  onPressIn,
  onPressOut,
  ...props
}) => {
  const [isPressed, setPressed] = useState(false);

  const handlePressIn = (event: GestureResponderEvent) => {
    setPressed(true);
    onPressIn && onPressIn(event);
  };

  const handlePressOut = (event: GestureResponderEvent) => {
    setPressed(false);
    onPressOut && onPressOut(event);
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[
        styles.button,
        {
          backgroundColor: isPressed
            ? MobileTheme.palette.secondary.clicked
            : MobileTheme.palette.secondary.main,
          opacity: disabled ? 0.3 : 1,
        },
        style,
      ]}
      {...props}
      disabled={disabled}
    >
      <MaterialIcons name={icon} size={16} color={MobileTheme.palette.primary.text} />
    </Pressable>
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
