import { ReactNode } from "react";

import styled, { css } from "styled-components";

import { Theme } from "../../theme";

export type TypographyVariant =
  | "caption4"
  | "text1"
  | "text2"
  | "text3"
  | "text1Bold"
  | "text2Bold"
  | "text3Bold";

export type TypographyColor =
  | "normal"
  | "secondary"
  | "primary"
  | "white"
  | "error";

interface TypographyProps {
  variant?: TypographyVariant;
  color?: TypographyColor;
  onClick?: (...args: any) => void;
  children: ReactNode;
}

export const getTypographyColorStyles = (color?: TypographyColor) => {
  switch (color) {
  case "secondary":
    return css`
        color: ${Theme.palette.secondary.text};
      `;
  case "primary":
    return css`
        color: ${Theme.palette.primary.main};
      `;
  case "white":
    return css`
        color: ${Theme.palette.common.white};
      `;
  case "error":
    return css`
        color: ${Theme.palette.error.text};
      `;
  default:
    return css`
        color: inherit;
      `;
  }
};

const DEFAULT_STYLES = css`
  margin: 0;
`;

const Caption4 = styled.h6<{ color?: TypographyColor }>`
  ${({ color, theme }) =>
    css`
      font-family: ${theme.fontFamily};
      font-size: ${theme.fonts.caption4.size};
      font-weight: ${theme.fonts.caption4.weight};
      ${getTypographyColorStyles(color)}
    `}
  ${DEFAULT_STYLES}
`;

const Text1 = styled.p<{ color?: TypographyColor }>`
  ${({ color, theme }) =>
    css`
      font-family: ${theme.fontFamily};
      font-size: ${theme.fonts.text1.size};
      font-weight: ${theme.fonts.text1.weight};
      ${getTypographyColorStyles(color)}
    `}
  ${DEFAULT_STYLES}
`;

const Text2 = styled.p<{ color?: TypographyColor }>`
  ${({ color, theme }) =>
    css`
      font-family: ${theme.fontFamily};
      font-size: ${theme.fonts.text2.size};
      font-weight: ${theme.fonts.text2.weight};
      ${getTypographyColorStyles(color)}
    `}
  ${DEFAULT_STYLES}
`;

const Text3 = styled.p<{ color?: TypographyColor }>`
  ${({ color, theme }) =>
    css`
      font-family: ${theme.fontFamily};
      font-size: ${theme.fonts.text3.size};
      font-weight: ${theme.fonts.text3.weight};
      ${getTypographyColorStyles(color)}
    `}
  ${DEFAULT_STYLES}
`;

const Text1Bold = styled.p<{ color?: TypographyColor }>`
  ${({ color, theme }) =>
    css`
      font-family: ${theme.fontFamily};
      font-size: ${theme.fonts.text1Bold.size};
      font-weight: ${theme.fonts.text1Bold.weight};
      ${getTypographyColorStyles(color)}
    `}
  ${DEFAULT_STYLES}
`;

const Text2Bold = styled.p<{ color?: TypographyColor }>`
  ${({ color, theme }) =>
    css`
      font-family: ${theme.fontFamily};
      font-size: ${theme.fonts.text2Bold.size};
      font-weight: ${theme.fonts.text2Bold.weight};
      ${getTypographyColorStyles(color)}
    `}
  ${DEFAULT_STYLES}
`;

const Text3Bold = styled.p<{ color?: TypographyColor }>`
  ${({ color, theme }) =>
    css`
      font-family: ${theme.fontFamily};
      font-size: ${theme.fonts.text3Bold.size};
      font-weight: ${theme.fonts.text3Bold.weight};
      ${getTypographyColorStyles(color)}
    `}
  ${DEFAULT_STYLES}
`;

export const Typography: React.FC<TypographyProps> = ({
  variant,
  color,
  ...props
}) => {
  switch (variant) {
  case "caption4":
    return <Caption4 color={color} {...props} />;
  case "text1":
    return <Text1 color={color} {...props} />;
  case "text2":
    return <Text2 color={color} {...props} />;
  case "text3":
    return <Text3 color={color} {...props} />;
  case "text1Bold":
    return <Text1Bold color={color} {...props} />;
  case "text2Bold":
    return <Text2Bold color={color} {...props} />;
  case "text3Bold":
    return <Text3Bold color={color} {...props} />;
  default:
    return <Text2 color={color} {...props} />;
  }
};
