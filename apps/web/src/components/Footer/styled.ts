import styled, { css } from "styled-components";

import { Typography } from "../../styled/components/Typography";

export const Wrapper = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  margin: 0 auto;

  ${({ theme }) => css`
    background: ${theme.palette.common.greyMuted};
    border-top: 1px solid ${theme.palette.border.light};
    max-width: ${theme.size.maxWidth};
  `}
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
