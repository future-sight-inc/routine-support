import styled, { css } from "styled-components";

import { Typography } from "../../styled/components/Typography";

export const Wrapper = styled.div`
  min-height: 40px;
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    background: ${theme.palette.error.main};
    border-radius: ${theme.borderRadius.m};
  `};
`;

export const ErrorText = styled(Typography).attrs(() => ({
  variant: "text2",
  color: "error",
}))``;
