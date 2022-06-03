import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
`;

export const TextField = styled.input<{
  error?: boolean;
  showBorder: boolean;
  withIcon: boolean;
}>`
  height: 40px;
  box-sizing: border-box;
  padding: 0 8px;
  border: none;
  outline: none;
  border: 1px solid;

  ${({ theme, error, showBorder, withIcon }) => css`
    ${!showBorder &&
    css`
      border-width: 0;
    `};

    ${withIcon &&
    css`
      padding-left: 40px;
    `};

    border-color: ${theme.palette.border.main};
    font-family: ${theme.fontFamily};
    font-size: ${theme.fonts.text2.size};
    font-weight: ${theme.fonts.text2.weight};
    border-radius: ${theme.borderRadius};

    &::placeholder {
      font-family: ${theme.fontFamily};
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

    &:disabled {
      pointer-events: none;
    }
  `}

  & * {
    font-size: 19px;
  }
`;
