import React, { useState } from "react";

import { StyleSheet, TextInput, TextInputProps } from "react-native";

import { MobileTheme } from "../../theme";

export interface TextFieldProps extends TextInputProps {
  error?: boolean;
}

export const TextField: React.FC<TextFieldProps> = ({
  error,
  onFocus,
  onBlur,
  style,
  ...props
}) => {
  const [isFocused, setFocused] = useState(false);

  const handleFocus = (event) => {
    setFocused(true);
    onFocus && onFocus(event);
  };

  const handleBlur = (event) => {
    setFocused(false);
    onBlur && onBlur(event);
  };

  const getBorderColor = () => {
    if (isFocused) {
      return MobileTheme.palette.primary.main;
    }

    if (error) {
      return MobileTheme.palette.error.text;
    }

    return MobileTheme.palette.border.normal;
  };

  return (
    <TextInput
      style={[styles.textInput, { borderColor: getBorderColor() }, style]}
      placeholderTextColor={MobileTheme.palette.secondary.text}
      {...props}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 8,
    borderRadius: MobileTheme.borderRadius.m,
  },
});
