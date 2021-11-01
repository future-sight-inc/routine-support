import { Typography } from "@mui/material";
import styled from "styled-components";

export const ErrorText = styled(Typography).attrs(() => ({
  variant: "subtitle1",
}))`
  color: ${({ theme }) => theme.palette.error.main};
`;
