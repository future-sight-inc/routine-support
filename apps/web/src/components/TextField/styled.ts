import styled, { css } from "styled-components";

export const TextField = styled.input<{ error?: boolean }>`
  height: 40px;
  box-sizing: border-box;
  padding: 0 8px;
  border: none;
  outline: none;
  border: 1px solid;

  ${({ theme, error }) => css`
    border-color: ${theme.palette.border.main};

    font-size: ${theme.fonts.text2.size};
    font-weight: ${theme.fonts.text2.weight};
    border-radius: ${theme.borderRadius};

    &::placeholder {
      font-size: ${theme.fonts.text2.size};
      font-weight: ${theme.fonts.text2.weight};
      color: ${theme.palette.secondary.text};

      ${error &&
      css`
        border-color: ${theme.palette.error.main};
      `}
    }

    ${error &&
    css`
      border-color: ${theme.palette.error.text};
    `}

    &:hover,
    &:focus,
    &:active {
      border-color: ${theme.palette.primary.main};

      ${error &&
      css`
        border-color: ${theme.palette.error.text};
      `}
    }
  `}

  & * {
    font-size: 19px;
  }
`;
