import styled from "styled-components";
import { Button as DefaultButton } from "apps/web/src/styled/components/Button";

export const Button = styled(DefaultButton).attrs(() => ({
  backgroundColor: "black",
  fontColor: "white",
}))`
  width: auto;
`;
