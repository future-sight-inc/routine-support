import { Box } from "@mui/material";
import styled from "styled-components";
import { Button } from "apps/web/src/styled/components/Button";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const SubmitButton = styled(Button).attrs(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}))``;

export const DeleteButton = styled(Button).attrs(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  fontColor: theme.palette.secondary.contrastText,
}))``;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
