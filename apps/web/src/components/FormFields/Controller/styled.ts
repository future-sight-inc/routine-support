import { Box, Typography, FormHelperText } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled(Box)``;

export const Label = styled(Typography).attrs(() => ({
  variant: "body1",
}))<{
  error?: boolean;
}>`
  margin-bottom: 4px;
  ${({ theme }) => `color: ${theme.palette.common.black}`};
  ${({ error, theme }) => error && `color: ${theme.palette.error.main}`};
`;

export const Error = styled(FormHelperText).attrs(() => ({ error: true }))``;
