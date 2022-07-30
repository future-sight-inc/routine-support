import UIEditIcon from "@mui/icons-material/Edit";
import { ImageUrl } from "@routine-support/types";
import styled, { css } from "styled-components";

import { Button } from "../../styled/components/Button";
import { Typography } from "../../styled/components/Typography";

export const Wrapper = styled.div<{ backgroundImage?: ImageUrl }>`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 184px;
  width: 100%;

  ${({ theme, backgroundImage }) =>
    css`
      background: ${backgroundImage ? theme.palette.common.black : theme.palette.secondary.main};
      background-image: url(${backgroundImage});
      border-radius: ${theme.borderRadius.l};
    `};

  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: auto 168px;
`;

export const OpenButton = styled(Button).attrs(() => ({
  fontColor: "white",
}))`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  box-shadow: ${({ theme }) => theme.boxShadow.small};
`;

export const EditButton = styled(Button).attrs(() => ({
  fontColor: "white",
}))`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditIcon = styled(UIEditIcon).attrs(() => ({
  sx: { fontSize: 14 },
}))``;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ModalTitle = styled(Typography).attrs(() => ({
  variant: "caption4",
}))``;

export const PictogramsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
  max-height: 320px;
  overflow: scroll;
`;

export const Pictogram = styled.img<{ active?: boolean }>`
  width: 100%;
  height: auto;
  cursor: pointer;
  box-sizing: border-box;

  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.l};
  `}

  ${({ active, theme }) =>
    active &&
    css`
      border: 2px solid ${theme.palette.primary.main};
    `}
`;
