import { Typography } from "@mui/material";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Header = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const Title = styled(Typography).attrs(() => ({ variant: "h4" }))``;

export const Content = styled.div`
  height: 600px;

  ${({ theme }) => css`
    background: ${theme.palette.common.white};
    border-radius: ${theme.borderRadius}px;
  `}
`;
