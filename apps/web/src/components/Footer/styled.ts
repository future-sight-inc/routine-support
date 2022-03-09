import { Typography } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 48px;
  background: ${({ theme }) => theme.palette.common.grey};
  color: ${({ theme }) => theme.palette.secondary.contrastText};
  padding: 0 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LanguageWrapper = styled.div`
  position: absolute;
  right: 32px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const LanguageSwitch = styled(Typography)`
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

export const Rights = styled(Typography)``;
