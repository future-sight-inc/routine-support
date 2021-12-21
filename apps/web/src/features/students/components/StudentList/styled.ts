import { Typography } from "@mui/material";
import BasicList from "@mui/material/List";
import styled from "styled-components";

export const List = styled(BasicList)`
  position: static;
  max-height: calc(100vh - 60px - 32px - 40px - 64px);
  overflow-y: scroll;
  border: 1px solid ${({ theme }) => theme.border.color};
  border-radius: 8px;
  background: 25px;
`;

export const QrTitle = styled(Typography).attrs(() => ({ variant: "h6" }))`
  text-align: center;
`;

export const Qr = styled.img`
  width: 100%;
  height: auto;
`;
