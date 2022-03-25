import { Button } from "apps/web/src/styled/components/Button";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const NameInput = styled.input`
  font-size: 24px;
  border: none;
  outline: none;
`;

export const Row = styled.div`
  display: flex;
  gap: 16px;
`;

export const SubmitButton = styled(Button).attrs(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}))`
  width: 120px;
`;

export const DeleteButton = styled(Button).attrs(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  fontColor: theme.palette.secondary.contrastText,
}))`
  width: 120px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
