import React, { useState } from "react";
import { GestureResponderEvent, Pressable, PressableProps, StyleSheet } from "react-native";
import { MobileTheme } from "../../app/app";
import { Typography } from "../Typography";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends PressableProps {
  text: string;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  fullWidth,
  disabled,
  style,
  onPressIn,
  onPressOut,
  ...props
}) => {
  const [isPressed, setPressed] = useState(false);

  const handlePressIn = (event: GestureResponderEvent) => {
    setPressed(true);
    onPressIn(event);
  };

  const handlePressOut = (event: GestureResponderEvent) => {
    setPressed(false);
    onPressOut(event);
  };

  const getTextColor = (variant: ButtonVariant) => {
    switch (variant) {
    case "primary":
      return MobileTheme.palette.common.white;
    default:
      return MobileTheme.palette.primary.text;
    }
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={{
        ...style,
        ...styles.button,
        backgroundColor: isPressed
          ? MobileTheme.palette[variant].clicked
          : MobileTheme.palette[variant].main,
        width: fullWidth ? "100%" : styles.button.width,
        opacity: disabled ? 0.3 : 1,
      }}
      {...props}
      disabled={disabled}
    >
      <Typography style={{ ...styles.text, color: getTextColor(variant) }}>{text}</Typography>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: MobileTheme.palette.primary.main,
    borderRadius: 5,
  },
  text: {
    fontWeight: MobileTheme.fonts.caption4.weight,
    fontSize: MobileTheme.fonts.caption4.size,
  },
});
