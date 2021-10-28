import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ absoluteCenter?: boolean }>`
  padding: 32px;
  width: 100%;
  max-width: 600px;

  ${({ theme, absoluteCenter }) => css`
    background: ${theme.palette.common.white};
    border: ${theme.border.main};
    border-radius: ${theme.borderRadius}px;
    ${absoluteCenter && theme.position.absoluteCenter};
  `};
`;
