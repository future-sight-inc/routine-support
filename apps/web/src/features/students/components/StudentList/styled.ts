import { Typography } from "apps/web/src/styled/components/Typography";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 16px;
`;

export const QrTitle = styled(Typography).attrs(() => ({
  variant: "caption4",
}))`
  text-align: center;
`;

export const Qr = styled.img`
  width: 100%;
  max-width: 250px;
  display: block;
  margin: 0 auto;
  height: auto;
`;
