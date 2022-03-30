import { Typography } from "@mui/material";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  padding-top: 4px;
`;

export const LabelWrapper = styled.div<{ isChecked: boolean }>`
  box-shadow: ${({ theme }) => theme.border.color} 0px 0px 0px 1px;
  padding: 4px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;

  ${({ isChecked, theme }) =>
    isChecked &&
    css`
      box-shadow: ${theme.palette.primary.main} 0px 0px 0px 3px;
    `}
`;

export const LabelText = styled(Typography)``;

export const LabelIcon = styled.img`
  width: 110px;
  height: 90px;
  object-fit: contain;
`;
