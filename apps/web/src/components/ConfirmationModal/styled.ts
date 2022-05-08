import styled from "styled-components";

import { Button } from "../../styled/components/Button";
import { Typography } from "../../styled/components/Typography";

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 88px;
`;

export const Title = styled(Typography).attrs(() => ({
  variant: "caption4",
}))``;

export const Description = styled(Typography).attrs(() => ({
  variant: "text1",
}))``;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: auto;
  padding-top: 8px;
`;

export const ConfirmButton = styled(Button)`
  width: 120px;
`;

export const CancelButton = styled(Button).attrs(() => ({
  variant: "secondary",
}))`
  width: 120px;
`;
