import styled from "styled-components";

import { Typography } from "../../styled/components/Typography";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.palette.secondary.main};
  padding: 0 16px;
  position: relative;
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

export const LanguageSelectorWrapper = styled.div`
  position: absolute;
  right: 16px;
`;

export const Rights = styled(Typography).attrs(() => ({
  variant: "text2",
  color: "secondary",
}))``;
