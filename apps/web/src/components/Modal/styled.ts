import UICloseIcon from "@mui/icons-material/Close";
import { rgba } from "polished";
import styled, { css } from "styled-components";

export const Modal = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 2000;
  overflow: scroll;

  ${({ theme }) => css`
    background: ${rgba(theme.palette.common.black, 0.5)};
  `}
`;

export const ModalContent = styled.div`
  box-sizing: border-box;
  width: 400px;
  min-height: 120px;
  margin: 0 auto;

  margin-bottom: 32px;
  padding: 16px;
  padding-bottom: 24px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${({ theme }) => css`
    background: ${theme.palette.common.white};
    border-radius: ${theme.borderRadius.l};
    box-shadow: ${theme.boxShadow.medium};
  `};
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
    }
  `}
`;
