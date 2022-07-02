import { Button } from "apps/web/src/styled/components/Button";
import { Typography } from "apps/web/src/styled/components/Typography";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  padding: 16px;

  ${({ theme }) => css`
    box-shadow: ${theme.boxShadow.small};
    border-radius: ${theme.borderRadius.l};
  `}
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  background: black;

  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.m};
  `}
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Title = styled(Typography).attrs(() => ({
  variant: "caption4",
}))``;

export const Name = styled(Typography).attrs(() => ({
  variant: "text1Bold",
}))``;

export const Time = styled(Typography)``;

export const Caption = styled(Typography)``;

export const StudentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StudentsList = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const DeleteButton = styled(Button).attrs(() => ({
  variant: "secondary",
}))`
  width: 120px;
  margin-left: auto;
`;
