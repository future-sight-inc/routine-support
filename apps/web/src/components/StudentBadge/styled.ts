import { Typography } from "apps/web/src/styled/components/Typography";
import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ color: string }>`
  height: 30px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;

  ${({ theme, color }) => css`
    border-radius: ${theme.borderRadius};
    background: ${color};
  `}
`;

export const Name = styled(Typography)``;
