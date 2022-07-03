import styled from "styled-components";

import { Typography } from "../../styled/components/Typography";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.palette.common.greyMuted};
  padding: 0 16px;
  border-top: 1px solid ${({ theme }) => theme.palette.border.light};
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
