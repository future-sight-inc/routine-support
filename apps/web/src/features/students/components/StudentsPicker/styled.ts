import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ opened?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${({ opened }) =>
    opened &&
    css`
      padding-bottom: 16px;
    `}
`;
