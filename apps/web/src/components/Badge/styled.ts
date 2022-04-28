import styled, { css } from "styled-components";

import { Typography } from "../../styled/components/Typography";

export const Wrapper = styled.div<{ color: string }>`
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  border-radius: 9px;

  ${({ color }) => css`
    background: ${color};
  `}
`;

export const InnerText = styled(Typography).attrs(() => ({
  variant: "text3Bold",
}))<{ textColor: string }>`
  color: ${({ textColor }) => textColor};
`;
