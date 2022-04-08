import { Typography } from "@mui/material";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 40px calc(100vh - 60px - 64px - 40px - 16px);
  gap: 16px;
`;

export const Header = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const Title = styled(Typography).attrs(() => ({ variant: "h4" }))``;

export const Content = styled.div`
  position: relative;
  overflow: none;

  ${({ theme }) => css`
    background: ${theme.palette.common.white};
    border-radius: ${theme.borderRadius};
  `}
`;
