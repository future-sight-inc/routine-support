import React, { ReactNode } from "react";

import { TypographyColor, TypographyVariant } from "@routine-support/ui-theme";
import { Text, TextProps } from "react-native";

import { Theme } from "../../theme";

interface TypographyProps extends TextProps {
  children: ReactNode;
  variant?: TypographyVariant;
  color?: TypographyColor;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "text1",
  color = "normal",
  style,
  ...props
}) => {
  const getFontSize = (variant: TypographyVariant): number => {
    let size;

    switch (variant) {
    case "text1":
      size = Theme.fonts.text1.size;
      break;
    case "text1Bold":
      size = Theme.fonts.text1Bold.size;
      break;
    case "text2":
      size = Theme.fonts.text2.size;
      break;
    case "text2Bold":
      size = Theme.fonts.text2Bold.size;
      break;
    case "text3":
      size = Theme.fonts.text3.size;
      break;
    case "text3Bold":
      size = Theme.fonts.text3Bold.size;
      break;
    case "caption1":
      size = Theme.fonts.caption1.size;
      break;
    case "caption1Normal":
      size = Theme.fonts.caption1Normal.size;
      break;
    case "caption2":
      size = Theme.fonts.caption2.size;
      break;
    case "caption2Normal":
      size = Theme.fonts.caption2Normal.size;
      break;
    case "caption3":
      size = Theme.fonts.caption3.size;
      break;
    case "caption3Normal":
      size = Theme.fonts.caption3Normal.size;
      break;
    case "caption4":
      size = Theme.fonts.caption4.size;
      break;
    case "caption4Normal":
      size = Theme.fonts.caption4Normal.size;
      break;
    }

    return size;
  };

  const getFontWeight = (variant: TypographyVariant): "normal" | "bold" => {
    switch (variant) {
    case "text1":
      return Theme.fonts.text1.weight;
    case "text1Bold":
      return Theme.fonts.text1Bold.weight;
    case "text2":
      return Theme.fonts.text2.weight;
    case "text2Bold":
      return Theme.fonts.text2Bold.weight;
    case "text3":
      return Theme.fonts.text3.weight;
    case "text3Bold":
      return Theme.fonts.text3Bold.weight;
    case "caption1":
      return Theme.fonts.caption1.weight;
    case "caption1Normal":
      return Theme.fonts.caption1Normal.weight;
    case "caption2":
      return Theme.fonts.caption2.weight;
    case "caption2Normal":
      return Theme.fonts.caption2Normal.weight;
    case "caption3":
      return Theme.fonts.caption3.weight;
    case "caption3Normal":
      return Theme.fonts.caption3Normal.weight;
    case "caption4":
      return Theme.fonts.caption4.weight;
    case "caption4Normal":
      return Theme.fonts.caption4Normal.weight;
    }
  };

  const getFontColor = (color: TypographyColor) => {
    switch (color) {
    case "normal":
      return Theme.palette.primary.text;
    case "secondary":
      return Theme.palette.secondary.text;
    case "primary":
      return Theme.palette.primary.main;
    case "white":
      return Theme.palette.common.white;
    case "error":
      return Theme.palette.error.text;
    }
  };

  return (
    <Text
      style={[
        {
          fontSize: getFontSize(variant),
          fontWeight: getFontWeight(variant),
          color: getFontColor(color),
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};
