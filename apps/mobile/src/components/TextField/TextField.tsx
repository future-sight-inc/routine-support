import React, { ReactNode, useState } from "react";

import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

import { Theme } from "../../theme";

export interface TextFieldProps extends TextInputProps {
  error?: boolean;
  icon?: ReactNode;
}

export const TextField: React.FC<TextFieldProps> = ({
  error,
  style,
  icon,
  onFocus,
  onBlur,
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
      return Theme.palette.primary.main;
    }

    if (error) {
      return Theme.palette.error.text;
    }

    return Theme.palette.border.normal;
  };

  return (
    <View style={styles.wrapper}>
      {icon && <View style={styles.iconWrapper}>{icon}</View>}
      <TextInput
        style={[
          styles.textInput,
          { borderColor: getBorderColor() },
          icon && { paddingLeft: 28 },
          style,
        ]}
        placeholderTextColor={Theme.palette.secondary.text}
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { position: "relative" },
  textInput: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 8,
    borderRadius: Theme.borderRadius.m,
  },
  iconWrapper: {
    position: "absolute",
    left: 8,
    top: 0,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 10,
  },
});
