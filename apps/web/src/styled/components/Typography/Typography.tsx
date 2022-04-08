import styled, { css } from "styled-components";

import { Theme } from "../../theme";

type TypographyVariant =
  | "caption4"
  | "text1"
  | "text2"
  | "text3"
  | "text1Bold"
  | "text2Bold"
  | "text3Bold";

type TypographyColor = "normal" | "secondary" | "primary";

interface TypographyProps {
  variant?: TypographyVariant;
  color?: TypographyColor;
}

export const Typography: React.FC<TypographyProps> = ({
  variant,
  color,
  ...props
}) => {
  const StyledComponent = getStyledTypography({ variant, color });

  return <StyledComponent {...props} />;
};

const getStyledTypography = ({
  variant = "text2",
  color,
}: Omit<TypographyProps, "children">) => {
  const fontStyles = css`
    font-family: 'Roboto';
  `;

  const colorStyles = getColorStyles(color);

  switch (variant) {
  case "caption4":
    return styled.h6`
        font-size: 20px;
        font-weight: bold;
        ${colorStyles}
        ${fontStyles}
      `;
  case "text1":
    return styled.p`
        font-size: 16px;
        ${colorStyles}
        ${fontStyles}
      `;
  case "text2":
    return styled.p`
        font-size: 14px;
        ${colorStyles}
        ${fontStyles}
      `;
  case "text3":
    return styled.p`
        font-size: 12px;
        ${colorStyles}
        ${fontStyles}
      `;
  case "text1Bold":
    return styled.p`
        font-size: 16px;
        font-weight: bold;
        ${colorStyles}
        ${fontStyles}
      `;
  case "text2Bold":
    return styled.p`
        font-size: 14px;
        font-weight: bold;
        ${colorStyles}
        ${fontStyles}
      `;
  case "text3Bold":
    return styled.p`
        font-size: 12px;
        font-weight: bold;
        ${colorStyles}
        ${fontStyles}
      `;
  default:
    return styled.p`
        font-size: 16px;
        font-weight: bold;
        ${colorStyles}
        ${fontStyles}
      `;
  }
};

const getColorStyles = (color?: TypographyColor) => {
  switch (color) {
  case "secondary":
    return css`
        color: ${Theme.palette.secondary.text};
      `;
  case "primary":
    return css`
        color: ${Theme.palette.primary.main};
      `;
  default:
    return css`
        color: ${Theme.palette.primary.text};
      `;
  }
};
