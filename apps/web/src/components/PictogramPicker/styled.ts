import { Box } from "@mui/material";
import styled, { css } from "styled-components";
import { Button } from "styled/components/Button";
import { ImageUrl } from "types/main";

export const Wrapper = styled.div<{ backgroundImage?: ImageUrl }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 300px;
  background-color: ${({ theme }) => theme.palette.common.black};

  ${({ theme, backgroundImage }) =>
    !backgroundImage &&
    css`
      background-color: ${theme.palette.secondary.main};

      & ${OpenButton} {
        top: 50%;
        transform: translate(-50%, -50%);
      }
    `};

  ${({ backgroundImage }) => `background-image: url(${backgroundImage})`};

  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 24px;
  background-size: auto 200px;
  margin-left: -32px;
  margin-right: -32px;

  transition: all 0.5s;
`;

export const OpenButton = styled(Button).attrs(() => ({
  fontColor: "white",
}))`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, calc(-100% - 32px));
`;

export const ModalContent = styled.div`
  display: grid;
  gap: 16px;
`;

export const PictogramsWrapper = styled.div`
  max-height: 500px;
  overflow-y: scroll;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

export const Pictogram = styled.img<{ active?: boolean }>`
  width: 100%;
  height: auto;
  cursor: pointer;
  box-sizing: border-box;

  ${({ active, theme }) =>
    active &&
    css`
      border: 4px solid ${theme.palette.primary.main};
    `}
`;
