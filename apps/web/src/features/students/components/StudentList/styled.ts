import { Typography } from "@mui/material";
import BasicList from "@mui/material/List";
import styled, { css } from "styled-components";

export const List = styled(BasicList)`
  position: static;
  max-height: calc(100vh - 60px - 32px - 40px - 64px);
  overflow-y: scroll;
  border: 1px solid ${({ theme }) => theme.palette.border.main};
  border-radius: 8px;
  background: 25px;
`;

export const QrTitle = styled(Typography).attrs(() => ({ variant: "h6" }))`
  text-align: center;
`;

export const Qr = styled.img`
  width: 100%;
  max-width: 250px;
  display: block;
  margin: 0 auto;
  height: auto;
`;

export const EmptyText = styled(Typography)`
  padding: 16px;

  ${({ theme }) =>
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: ${theme.borderRadius};
      background: ${theme.palette.secondary.main};
      color: ${theme.palette.secondary.text};
      border: ${theme.palette.border.main};
    `};
`;
