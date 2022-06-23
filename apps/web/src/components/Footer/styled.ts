import styled from "styled-components";

import { Typography } from "../../styled/components/Typography";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.palette.secondary.main};
  padding: 0 16px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin: 0 auto;
`;

export const LanguageSelectorWrapper = styled.div``;

export const Rights = styled(Typography).attrs(() => ({
  variant: "text2",
  color: "secondary",
}))`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
