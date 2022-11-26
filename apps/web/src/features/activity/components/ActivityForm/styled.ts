import { Button } from "apps/web/src/styled/components/Button";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DateWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 90px 90px;
  gap: 8px;
`;

export const RepeatWrapper = styled.div`
  width: 200px;
`;

export const SubmitButton = styled(Button)`
  width: 120px;
`;

export const SecondaryButton = styled(Button).attrs(() => ({
  variant: "secondary",
}))`
  width: 120px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
