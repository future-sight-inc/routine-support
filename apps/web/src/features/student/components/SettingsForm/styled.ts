import { Button } from "apps/web/src/styled/components/Button";
import { Typography } from "apps/web/src/styled/components/Typography";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled(Typography).attrs(() => ({
  variant: "caption4",
}))``;

export const LanguagePickerWrapper = styled.div`
  width: 248px;
`;

export const PinCodeWrapper = styled.div`
  width: 80px;
`;

export const SubmitButton = styled(Button)`
  width: 120px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
