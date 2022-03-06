import { Button as DefaultButton } from "apps/web/src/styled/components/Button";
import styled from "styled-components";

export const Button = styled(DefaultButton).attrs(() => ({
  backgroundColor: "black",
  fontColor: "white",
}))`
  width: auto;
`;
