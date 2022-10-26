import React from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  ActivityIndicator,
  PressableProps,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { MobileTheme } from "../../theme";
import { Typography } from "../Typography";
import { ButtonLocators } from "./locators";

type ButtonVariant = "primary" | "secondary";

type ButtonIcon = "add" | "remove";

interface ButtonProps extends PressableProps {
  text: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  icon?: ButtonIcon;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  disabled,
  style,
  icon,
  loading,
  ...props
}) => {
  const isDisabled = disabled || loading;

  const getTextColor = (variant: ButtonVariant) => {
    switch (variant) {
    case "primary":
      return MobileTheme.palette.common.white;
    default:
      return MobileTheme.palette.primary.text;
    }
  };

  const getBackgroundColor = (variant: ButtonVariant) => {
    switch (variant) {
    case "primary":
      return MobileTheme.palette.primary.main;
    default:
      return MobileTheme.palette.secondary.main;
    }
  };

  const renderInner = () => {
    if (loading) {
      return (
        <ActivityIndicator
          color={getTextColor(variant)}
          style={styles.spinner}
          testID={ButtonLocators.Spinner}
        />
      );
    } else {
      return (
        <>
          {icon && (
            <View style={styles.iconWrapper} testID={ButtonLocators.IconWrapper}>
              <MaterialIcons name={icon} size={24} color={getTextColor(variant)} />
            </View>
          )}
          <Typography
            style={[styles.text, { color: getTextColor(variant) }]}
            testID={ButtonLocators.Text}
          >
            {text}
          </Typography>
        </>
      );
    }
  };

  return (
    <TouchableOpacity
      disabled={isDisabled}
      testID={ButtonLocators.Wrapper}
      style={[styles.button, { backgroundColor: getBackgroundColor(variant) }, style]}
      {...props}
    >
      {renderInner()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: MobileTheme.borderRadius.m,
  },
  text: {
    fontWeight: MobileTheme.fonts.caption4.weight,
    fontSize: MobileTheme.fonts.caption4.size,
  },
  iconWrapper: {
    marginRight: 8,
  },
  spinner: {
    marginRight: 8,
  },
});
