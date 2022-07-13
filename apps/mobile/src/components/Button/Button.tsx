import React, { useState } from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { GestureResponderEvent, Pressable, PressableProps, StyleSheet, View } from "react-native";

import { MobileTheme } from "../../theme";
import { Typography } from "../Typography";
import { ButtonLocators } from "./locators";

type ButtonVariant = "primary" | "secondary";

type ButtonIcon = "add" | "remove";

interface ButtonProps extends PressableProps {
  text: string;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: ButtonIcon;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  fullWidth,
  disabled,
  style,
  icon,
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
        ...styles.button,
        backgroundColor: isPressed
          ? MobileTheme.palette[variant].clicked
          : MobileTheme.palette[variant].main,
        width: fullWidth ? "100%" : styles.button.width,
        opacity: disabled ? 0.3 : 1,
        ...style,
      }}
      {...props}
      disabled={disabled}
      testID={ButtonLocators.Wrapper}
    >
      {icon && (
        <View style={styles.iconWrapper} testID={ButtonLocators.IconWrapper}>
          <MaterialIcons name={icon} size={24} color={getTextColor(variant)} />
        </View>
      )}
      <Typography
        style={{ ...styles.text, color: getTextColor(variant) }}
        testID={ButtonLocators.Text}
      >
        {text}
      </Typography>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: MobileTheme.palette.primary.main,
    borderRadius: MobileTheme.borderRadius.m,
  },
  text: {
    fontWeight: MobileTheme.fonts.caption4.weight,
    fontSize: MobileTheme.fonts.caption4.size,
  },
  iconWrapper: {
    marginRight: 8,
  },
});
