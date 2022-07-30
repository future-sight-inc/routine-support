import UIDeleteIcon from "@mui/icons-material/Delete";
import { Button } from "apps/web/src/styled/components/Button";
import { Typography } from "apps/web/src/styled/components/Typography";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 0;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const NotViewedBadge = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;

  ${({ theme }) => css`
    background: ${theme.palette.primary.main};
  `}
`;

export const NotificationType = styled(Typography).attrs({
  variant: "text1",
  color: "error",
})``;

export const ActivityInfo = styled.div`
  display: flex;
  gap: 16px;
`;

export const Image = styled.img`
  width: 85px;
  height: 85px;
  background: black;

  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.m};
  `}
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  max-width: 350px;
  display: flex;
`;

export const Name = styled(Typography).attrs(() => ({
  variant: "caption4Normal",
}))`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const DeleteButton = styled(Button).attrs(() => ({
  variant: "secondary",
}))`
  width: 30px;
  height: 30px;
  margin-left: 16px;
`;

export const DeleteIcon = styled(UIDeleteIcon).attrs(() => ({
  sx: { fontSize: 16 },
}))``;

export const Time = styled(Typography).attrs({
  variant: "text2",
  color: "secondary",
})``;

export const StudentsWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StudentsList = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;
