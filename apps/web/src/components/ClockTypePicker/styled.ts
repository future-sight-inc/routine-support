import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styled, { css } from "styled-components";

import { Typography } from "../../styled/components/Typography";

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 4px;
`;

export const TypeWrapper = styled.div<{ isChecked: boolean }>`
  width: 80px;
  height: 40px;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ isChecked, theme }) =>
    !isChecked &&
    css`
      border: 1px solid ${theme.palette.border.normal};

      & * {
        color: ${theme.palette.secondary.text};
      }

      &:hover {
        border: 1px solid ${theme.palette.primary.main};

        & * {
          color: ${theme.palette.primary.main};
        }
      }
    `}

  ${({ isChecked, theme }) =>
    isChecked &&
    css`
      background: ${theme.palette.primary.main};

      & * {
        color: ${theme.palette.common.white};
      }
    `}
`;

export const TypeText = styled(Typography).attrs(() => ({
  variant: "text1Bold",
}))``;

export const TypeIcon = styled(AccessTimeIcon).attrs(() => ({
  sx: { fontSize: 24 },
}))``;
