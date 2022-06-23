import styled, { css } from "styled-components";

import { Typography } from "../../styled/components/Typography";
import { MenuPlacement } from "./Menu";

export const Wrapper = styled.div`
  position: relative;
`;

export const Menu = styled.div<{ placement: MenuPlacement }>`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 3000;
  overflow: scroll;
  max-height: 180px;

  ${({ placement }) => {
    switch (placement) {
      case "top":
        return css`
          top: 0;
          transform: translateY(calc(-100% - 4px));
        `;
      case "bottom":
        return css`
          bottom: 0;
          transform: translateY(calc(100% + 4px));
        `;
    }
  }}

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
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const EmptyText = styled(Typography).attrs(() => ({
  color: "secondary",
}))`
  height: 40px;
  line-height: 40px;
  padding: 0 8px;
`;
