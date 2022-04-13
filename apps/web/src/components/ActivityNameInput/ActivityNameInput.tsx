import { TextareaAutosize } from "@mui/material";
import styled, { css } from "styled-components";

export const ActivityNameInput = styled(TextareaAutosize)`
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
