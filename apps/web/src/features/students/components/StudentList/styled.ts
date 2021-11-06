import { Typography } from "@mui/material";
import BasicList from "@mui/material/List";
import styled, { css } from "styled-components";

export const List = styled(BasicList)`
  position: static;
  max-height: calc(100vh - 60px - 32px - 40px - 64px);
  overflow-y: scroll;
`;

export const EmptyInfo = styled(Typography)`
  padding: 16px;

  ${({ theme }) =>
    css`
      ${theme.position.absoluteCenter}
      border-radius: ${theme.borderRadius}px;
      background: ${theme.palette.common.grey};
      color: ${theme.palette.secondary.contrastText};
      border: ${theme.border.main};
    `};
`;

export const QrTitle = styled(Typography).attrs(() => ({ variant: "h6" }))`
  text-align: center;
`;

export const Qr = styled.img`
  width: 100%;
  height: auto;
`;
