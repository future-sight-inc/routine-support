import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ absoluteCenter?: boolean }>`
  padding: 32px;
  width: 100%;
  max-width: 600px;

  ${({ theme, absoluteCenter }) => css`
    background: ${theme.palette.common.white};
    border: ${theme.palette.border.main};
    border-radius: ${theme.borderRadius};
    ${absoluteCenter &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `};
  `};
`;
