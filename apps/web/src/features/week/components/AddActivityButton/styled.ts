import { Button as DefaultButton } from "apps/web/src/styled/components/Button";
import { Typography } from "apps/web/src/styled/components/Typography";
import styled from "styled-components";

export const Button = styled(DefaultButton).attrs(() => ({
  fontColor: "white",
}))`
  width: 100%;
`;

export const ButtonText = styled(Typography).attrs(() => ({
  variant: "caption4",
  color: "white",
}))``;
