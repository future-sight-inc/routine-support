import UIHelpIcon from "@mui/icons-material/Help";
import { FormHelperText, Typography } from "@mui/material";
import styled from "styled-components";
export const Wrapper = styled.div``;

export const Label = styled(Typography).attrs(() => ({
  variant: "body1",
}))<{
  error?: boolean;
}>`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  ${({ theme }) => `color: ${theme.palette.common.black}`};
  ${({ error, theme }) => error && `color: ${theme.palette.error.main}`};
`;

export const Error = styled(FormHelperText).attrs(() => ({ error: true }))``;

export const HelpIcon = styled(UIHelpIcon)`
  font-size: 18px;
  color: ${({ theme }) => theme.palette.secondary.contrastText};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.palette.common.black};
  }

  margin-left: 4px;
`;

export const HelperText = styled(Typography)`
  padding: 8px;
`;
