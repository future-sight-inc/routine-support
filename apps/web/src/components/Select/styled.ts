import ChevronUp from "@mui/icons-material/ExpandLess";
import ChevronDown from "@mui/icons-material/ExpandMore";
import styled, { css } from "styled-components";

import { Typography } from "../../styled/components/Typography";
import { TextField as UITextField } from "../TextField";

export const Wrapper = styled.div`
  position: relative;
`;

export const TextField = styled(UITextField)`
  width: 100%;
  caret-color: transparent;
  cursor: pointer;
`;

export const Menu = styled.div`
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 4000;
  overflow: hidden;

  ${({ theme }) => css`
    background: ${theme.palette.common.white};
    border-radius: ${theme.borderRadius};
    box-shadow: ${theme.boxShadow.small};
  `}
`;

export const OptionWrapper = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 8px;
  cursor: pointer;

  ${({ theme, isActive }) => css`
    ${!isActive &&
    css`
      &:hover {
        background: ${theme.palette.secondary.main};
      }
    `}

    ${isActive &&
    css`
      background: ${theme.palette.primary.main};
      color: ${theme.palette.common.white};
    `}
  `}
`;

export const Option = styled(Typography)``;

export const Overlay = styled.div`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3000;
`;

export const IconDown = styled(ChevronDown).attrs(() => ({
  sx: { fontSize: 16 },
}))``;

export const IconUp = styled(ChevronUp).attrs(() => ({
  sx: { fontSize: 16 },
}))``;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 8px;
  pointer-events: none;
`;
