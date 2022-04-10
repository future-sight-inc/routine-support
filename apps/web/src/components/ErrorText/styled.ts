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
    border-radius: ${theme.borderRadius};
  `};
`;

export const ErrorText = styled(Typography).attrs(() => ({
  variant: "text2",
}))`
  ${({ theme }) => css`
    color: ${theme.palette.error.text};
  `};
`;
