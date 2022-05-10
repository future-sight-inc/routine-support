import UICloseIcon from "@mui/icons-material/Close";
import { rgba } from "polished";
import styled, { css } from "styled-components";
import styledQuery from "styled-container-query";
export const Modal = styled.div`
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
`;

export const ModalContent = styledQuery.div`
  box-sizing: border-box;
  width: 400px;
  min-height: 120px;
  margin: 0 auto;
  margin-top: 20vh;
  margin-bottom: 32px;
  padding: 16px;
  padding-bottom: 24px;
  box-sizing: border-box;
  position: relative;

  &:container(max-height: 60%) {
    margin-top: 50vh;
    transform: translateY(-50%);
  }

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
