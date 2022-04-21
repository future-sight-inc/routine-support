import { Typography } from "apps/web/src/styled/components/Typography";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 16px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const ModalText = styled(Typography).attrs(() => ({
  variant: "caption4",
}))`
  width: 80%;
  text-align: center;
`;

export const Qr = styled.img`
  width: 200px;
  height: 200px;
  display: block;
  margin: 0 auto;
`;
