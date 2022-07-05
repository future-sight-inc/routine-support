import { TypographyColor, TypographyVariant } from "@routine-support/ui-theme";
import React, { ReactNode } from "react";
import { Text, TextProps } from "react-native";
import { MobileTheme } from "../../app/app";

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
      size = MobileTheme.fonts.text1.size;
      break;
    case "text1Bold":
      size = MobileTheme.fonts.text1Bold.size;
      break;
    case "text2":
      size = MobileTheme.fonts.text2.size;
      break;
    case "text2Bold":
      size = MobileTheme.fonts.text2Bold.size;
      break;
    case "text3":
      size = MobileTheme.fonts.text3.size;
      break;
    case "text3Bold":
      size = MobileTheme.fonts.text3Bold.size;
      break;
    case "caption1":
      size = MobileTheme.fonts.caption1.size;
      break;
    case "caption1Normal":
      size = MobileTheme.fonts.caption1Normal.size;
      break;
    case "caption2":
      size = MobileTheme.fonts.caption2.size;
      break;
    case "caption2Normal":
      size = MobileTheme.fonts.caption2Normal.size;
      break;
    case "caption3":
      size = MobileTheme.fonts.caption3.size;
      break;
    case "caption3Normal":
      size = MobileTheme.fonts.caption3Normal.size;
      break;
    case "caption4":
      size = MobileTheme.fonts.caption4.size;
      break;
    case "caption4Normal":
      size = MobileTheme.fonts.caption4Normal.size;
      break;
    }

    return size;
  };

  const getFontWeight = (variant: TypographyVariant): "normal" | "bold" => {
    switch (variant) {
    case "text1":
      return MobileTheme.fonts.text1.weight;
    case "text1Bold":
      return MobileTheme.fonts.text1Bold.weight;
    case "text2":
      return MobileTheme.fonts.text2.weight;
    case "text2Bold":
      return MobileTheme.fonts.text2Bold.weight;
    case "text3":
      return MobileTheme.fonts.text3.weight;
    case "text3Bold":
      return MobileTheme.fonts.text3Bold.weight;
    case "caption1":
      return MobileTheme.fonts.caption1.weight;
    case "caption1Normal":
      return MobileTheme.fonts.caption1Normal.weight;
    case "caption2":
      return MobileTheme.fonts.caption2.weight;
    case "caption2Normal":
      return MobileTheme.fonts.caption2Normal.weight;
    case "caption3":
      return MobileTheme.fonts.caption3.weight;
    case "caption3Normal":
      return MobileTheme.fonts.caption3Normal.weight;
    case "caption4":
      return MobileTheme.fonts.caption4.weight;
    case "caption4Normal":
      return MobileTheme.fonts.caption4Normal.weight;
    }
  };

  const getFontColor = (color: TypographyColor) => {
    switch (color) {
    case "normal":
      return MobileTheme.palette.primary.text;
    case "secondary":
      return MobileTheme.palette.secondary.text;

    case "primary":
      return MobileTheme.palette.primary.main;
    case "white":
      return MobileTheme.palette.common.white;
    case "error":
      return MobileTheme.palette.error.text;
    }
  };

  return (
    <Text
      style={{
        fontSize: getFontSize(variant),
        fontWeight: getFontWeight(variant),
        color: getFontColor(color),
        ...style,
      }}
      {...props}
    >
      {children}
    </Text>
  );
};
