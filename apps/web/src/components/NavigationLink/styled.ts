import styled, { css } from "styled-components";

import { Typography } from "../../styled/components/Typography";

export const Wrapper = styled.div<{ isActive: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  height: 50px;
  width: auto;

  ${({ theme, isActive }) =>
    !isActive &&
    css`
      & ${Text}, & * {
        color: ${theme.palette.secondary.text};
      }

      &:hover {
        & ${Text}, & * {
          color: ${theme.palette.primary.text};
        }
      }
    `}}

    ${({ theme, isActive }) =>
    isActive &&
      css`
        & ${Text}, & * {
          color: ${theme.palette.primary.main};
        }
      `}}
`;

export const Text = styled(Typography).attrs(() => ({
  variant: "text2Bold",
}))``;
