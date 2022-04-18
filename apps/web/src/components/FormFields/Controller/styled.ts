import { Typography } from "apps/web/src/styled/components/Typography";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Error = styled(Typography).attrs(() => ({
  variant: "text3",
  color: "error",
}))``;
