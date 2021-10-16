import { Box } from "@mui/material";
import styled from "styled-components";
import { Button } from "styled/components/Button";

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const NameInput = styled.input`
  font-size: 24px;
  border: none;
  outline: none;
`;

export const Row = styled(Box)`
  display: flex;
  gap: 16px;
`;

export const SubmitButton = styled(Button).attrs(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}))``;

export const DeleteButton = styled(Button).attrs(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  fontColor: theme.palette.secondary.contrastText,
}))``;

export const ButtonsWrapper = styled(Box)`
  display: flex;
  gap: 16px;
`;
