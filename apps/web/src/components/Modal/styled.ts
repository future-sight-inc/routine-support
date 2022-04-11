import UICloseIcon from "@mui/icons-material/Close";
import { rgba } from "polished";
import styled, { css } from "styled-components";

export const Modal = styled.div<{ isOpened: boolean }>`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 1000;
  overflow: scroll;

  padding-bottom: 32px;

  ${({ theme }) => css`
    background: ${rgba(theme.palette.common.black, 0.5)};
  `}

  ${({ isOpened }) =>
    !isOpened &&
    css`
      display: none;
    `}
`;

export const ModalContent = styled.div`
  box-sizing: border-box;
  width: 420px;
  min-height: 200px;
  margin: 0 auto;
  margin-top: 20vh;
  margin-bottom: 32px;
  padding: 24px;
  position: relative;

  ${({ theme }) => css`
    background: ${theme.palette.common.white};
    border-radius: ${theme.borderRadius};
    box-shadow: ${theme.boxShadow.medium};
  `}
`;

export const CloseIcon = styled(UICloseIcon).attrs(() => ({
  sx: { fontSize: 20 },
}))`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;

  ${({ theme }) => css`
    color: ${theme.palette.secondary.text};

    &:hover {
      color: ${theme.palette.primary.text};
    }}
  `}
`;
