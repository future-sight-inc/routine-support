import styled from "styled-components";

import { Typography } from "../../styled/components/Typography";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.secondary.text};
  padding: 0 16px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin: 0 auto;
`;

export const LanguageWrapper = styled.div`
  position: absolute;
  right: 32px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const LanguageSwitch = styled(Typography).attrs(() => ({
  variant: "text2Bold",
  color: "secondary",
}))`
  cursor: pointer;
`;

export const Rights = styled(Typography).attrs(() => ({
  variant: "text2",
  color: "secondary",
}))``;
