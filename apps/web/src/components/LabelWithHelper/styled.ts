import UIHelpIcon from "@mui/icons-material/Help";
import styled, { css } from "styled-components";

import {
  getTypographyColorStyles,
  Typography,
  TypographyColor,
} from "../../styled/components/Typography";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled(Typography)<{ color: TypographyColor }>`
  display: flex;
  align-items: center;
  user-select: none;

  ${({ color }) => getTypographyColorStyles(color)}
`;

export const HelpIcon = styled(UIHelpIcon).attrs(() => ({
  sx: { fontSize: 16 },
}))`
  color: ${({ theme }) => theme.palette.secondary.text};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.palette.common.black};
  }

  margin-left: 4px;
`;

export const HelperText = styled(Typography)`
  display: none;

  ${({ theme }) => css`
    border-radius: ${theme.borderRadius};
    box-shadow: ${theme.boxShadow.small};
    background: ${theme.palette.common.white};
  `};
`;

export const HelpIconWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  &:hover {
    ${HelperText} {
      display: block;
      position: absolute;
      top: -4px;
      left: 4px;
      transform: translateY(-100%);
      padding: 12px;
      height: 40px;
      box-sizing: border-box;
      white-space: nowrap;
    }
  }
`;
