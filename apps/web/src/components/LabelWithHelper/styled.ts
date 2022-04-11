import UIHelpIcon from "@mui/icons-material/Help";
import styled, { css } from "styled-components";

import { Typography } from "../../styled/components/Typography";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled(Typography).attrs(() => ({
  variant: "text2",
  color: "secondary",
}))`
  display: flex;
  align-items: center;
  user-select: none;
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
  padding: 12px;
  width: 120px;
  height: 40px;
  box-sizing: border-box;

  ${({ theme }) => css`
    border-radius: ${theme.borderRadius};
    box-shadow: ${theme.boxShadow.small};
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
    }
  }
`;
