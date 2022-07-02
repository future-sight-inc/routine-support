import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Color = styled.div<{ color: string; isActive: boolean }>`
  ${({ theme, color, isActive }) => css`
    margin-top: 4px;
    width: 40px;
    height: 40px;
    background: ${color};
    border-radius: ${theme.borderRadius.m};
    box-sizing: border-box;
    cursor: pointer;

    ${isActive &&
    css`
      border: 2px solid ${theme.palette.primary.main};
      transform: scale(1.2);
    `}
  `}
`;
