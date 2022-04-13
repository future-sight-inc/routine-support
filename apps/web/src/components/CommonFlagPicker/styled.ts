import styled, { css } from "styled-components";

import { Button as UIButton } from "../../styled/components/Button";

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled(UIButton)<{ isActive: boolean }>`
  width: 140px;

  ${({ theme, isActive }) => css`
    ${isActive &&
    css`
      pointer-events: none;
    `}

    ${!isActive &&
    css`
      background: none;
      border: 1px solid ${theme.palette.border.main};
      color: ${theme.palette.secondary.text};

      &:hover {
        background: none;
        border: 1px solid ${theme.palette.primary.main};
        color: ${theme.palette.primary.main};
      }
    `}
  `}
`;
