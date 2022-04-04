import UIHelpIcon from "@mui/icons-material/Help";
import { Typography } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled(Typography).attrs(() => ({
  variant: "body1",
}))<{
  error?: boolean;
}>`
  display: flex;
  align-items: center;
  user-select: none;

  ${({ theme }) => `color: ${theme.palette.common.black}`};
  ${({ error, theme }) => error && `color: ${theme.palette.error.main}`};
`;

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
