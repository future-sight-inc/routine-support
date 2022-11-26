import styled, { css } from "styled-components";

export const ActivityNameInput = styled.textarea`
  ${({ theme }) => css`
    font-size: ${theme.fonts.caption4.size};
    font-weight: ${theme.fonts.caption4.weight};
    font-family: ${theme.fontFamily};
    border: none;
    outline: none;
    width: 100%;
    resize: none;
  `}
`;
