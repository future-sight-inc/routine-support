import UIAddIcon from "@mui/icons-material/Add";
import styled, { css } from "styled-components";

export const AddIcon = styled(UIAddIcon).attrs(() => ({
  sx: { fontSize: 60 },
}))`
  opacity: 0;
  transition: all 0.1s;
  color: ${({ theme }) => theme.palette.secondary.main};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const AddExtraIconWrapper = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  right: 2px;
  width: 30px;
  height: 30px;
  ${({ theme }) => css`
    background: ${theme.palette.primary.main};
    border-radius: ${theme.borderRadius};
  `}
  transition: all .3s;
  z-index: 1000;
`;

export const AddExtraIcon = styled(UIAddIcon).attrs(() => ({
  sx: { fontSize: 30 },
}))`
  color: ${({ theme }) => theme.palette.common.white};
`;

export const Wrapper = styled.div<{ isExtraIconVisible: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  &:hover {
    ${AddIcon} {
      opacity: 1;
    }
  }

  ${({ isExtraIconVisible }) =>
    isExtraIconVisible &&
    css`
      ${AddExtraIconWrapper} {
        opacity: 1;
      }
    `}
`;
