import UIDeleteIcon from "@mui/icons-material/Delete";
import UIModifyIcon from "@mui/icons-material/Edit";
import UIFaceIcon from "@mui/icons-material/Face";
import UIQrCodeIcon from "@mui/icons-material/QrCode";
import UISettingsIcon from "@mui/icons-material/Settings";
import { Typography } from "apps/web/src/styled/components/Typography";
import styled, { css } from "styled-components";

export const FaceIcon = styled(UIFaceIcon).attrs(() => ({
  sx: { fontSize: 80 },
}))``;

export const Card = styled.div<{ studentColor: string }>`
  width: 176px;
  height: 196px;

  box-sizing: border-box;
  padding: 16px;

  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => css`
    background: ${theme.palette.common.white};
  `}

  &:hover {
    box-shadow: 0px 0px 0px 2px ${({ studentColor }) => studentColor} inset;
  }

  & ${FaceIcon} {
    color: ${({ studentColor }) => studentColor};
  }
`;

export const Name = styled(Typography).attrs(() => ({
  variant: "text1Bold",
}))`
  width: 100%;
  line-height: 38px;
  text-align: center;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ControlsPanel = styled.div`
  height: 30px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;

  ${({ theme }) => css`
    color: ${theme.palette.common.black};

    &:hover {
      background-color: ${theme.palette.secondary.main};
    }}
  `}
`;
export const ModifyIcon = styled(UIModifyIcon).attrs(() => ({
  sx: { fontSize: 16 },
}))``;

export const SettingsIcon = styled(UISettingsIcon).attrs(() => ({
  sx: { fontSize: 16 },
}))``;

export const QRCodeIcon = styled(UIQrCodeIcon).attrs(() => ({
  sx: { fontSize: 16 },
}))``;

export const DeleteIcon = styled(UIDeleteIcon).attrs(() => ({
  sx: { fontSize: 16 },
}))``;
