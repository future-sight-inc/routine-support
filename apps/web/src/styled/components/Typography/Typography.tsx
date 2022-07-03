import { ReactNode } from "react";

import { Theme, TypographyColor, TypographyVariant } from "@routine-support/ui-theme";
import styled, { css } from "styled-components";

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

const Caption1 = styled.h1<{ color?: TypographyColor }>`
  ${({ color, theme }) =>
    css`
      font-family: ${theme.fontFamily};
      font-size: ${theme.fonts.caption1.size};
      font-weight: ${theme.fonts.caption1.weight};
      ${getTypographyColorStyles(color)}
    `}
  ${DEFAULT_STYLES}
`;

const Caption2 = styled.h2<{ color?: TypographyColor }>`
  ${({ color, theme }) =>
    css`
      font-family: ${theme.fontFamily};
      font-size: ${theme.fonts.caption2.size};
      font-weight: ${theme.fonts.caption2.weight};
      ${getTypographyColorStyles(color)}
    `}
  ${DEFAULT_STYLES}
`;

const Caption3 = styled.h3<{ color?: TypographyColor }>`
  ${({ color, theme }) =>
    css`
      font-family: ${theme.fontFamily};
      font-size: ${theme.fonts.caption3.size};
      font-weight: ${theme.fonts.caption3.weight};
      ${getTypographyColorStyles(color)}
    `}
  ${DEFAULT_STYLES}
`;

const Caption4 = styled.h4<{ color?: TypographyColor }>`
  ${({ color, theme }) =>
    css`
      font-family: ${theme.fontFamily};
      font-size: ${theme.fonts.caption4.size};
      font-weight: ${theme.fonts.caption4.weight};
      ${getTypographyColorStyles(color)}
    `}
  ${DEFAULT_STYLES}
`;

const Caption1Normal = styled.h1<{ color?: TypographyColor }>`
  ${({ color, theme }) =>
    css`
      font-family: ${theme.fontFamily};
      font-size: ${theme.fonts.caption1Normal.size};
      font-weight: ${theme.fonts.caption1Normal.weight};
      ${getTypographyColorStyles(color)}
    `}
  ${DEFAULT_STYLES}
`;

const Caption2Normal = styled.h2<{ color?: TypographyColor }>`
  ${({ color, theme }) =>
    css`
      font-family: ${theme.fontFamily};
      font-size: ${theme.fonts.caption2Normal.size};
      font-weight: ${theme.fonts.caption2Normal.weight};
      ${getTypographyColorStyles(color)}
    `}
  ${DEFAULT_STYLES}
`;

const Caption3Normal = styled.h3<{ color?: TypographyColor }>`
  ${({ color, theme }) =>
    css`
      font-family: ${theme.fontFamily};
      font-size: ${theme.fonts.caption3Normal.size};
      font-weight: ${theme.fonts.caption3Normal.weight};
      ${getTypographyColorStyles(color)}
    `}
  ${DEFAULT_STYLES}
`;
const Caption4Normal = styled.h4<{ color?: TypographyColor }>`
  ${({ color, theme }) =>
    css`
      font-family: ${theme.fontFamily};
      font-size: ${theme.fonts.caption4Normal.size};
      font-weight: ${theme.fonts.caption4Normal.weight};
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

export const Typography: React.FC<TypographyProps> = ({ variant, color, ...props }) => {
  switch (variant) {
  case "caption1":
    return <Caption1 color={color} {...props} />;
  case "caption2":
    return <Caption2 color={color} {...props} />;
  case "caption3":
    return <Caption3 color={color} {...props} />;
  case "caption4":
    return <Caption4 color={color} {...props} />;
  case "caption1Normal":
    return <Caption1Normal color={color} {...props} />;
  case "caption2Normal":
    return <Caption2Normal color={color} {...props} />;
  case "caption3Normal":
    return <Caption3Normal color={color} {...props} />;
  case "caption4Normal":
    return <Caption4Normal color={color} {...props} />;
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
