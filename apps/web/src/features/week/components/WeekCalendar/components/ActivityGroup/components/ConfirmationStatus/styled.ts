import CheckIcon from "@mui/icons-material/Check";
import { Typography } from "apps/web/src/styled/components/Typography";
import styledComponents from "styled-components";
import styled from "styled-container-query";

const ConfirmedNumberText = styledComponents(Typography).attrs(() => ({
  variant: "text2",
}))``;

export const ConfirmedNumber = styled(ConfirmedNumberText)``;

export const CheckedIcon = styledComponents(CheckIcon)`
  font-size: 18px;
  margin-right: 2px;
`;

export const ConfirmationWrapper = styledComponents.div`
  color: ${({ theme }) => theme.palette.common.black};
  transition: background 0.2s;
  display: flex;
  align-items: center;
  padding: 2px 4px;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  width: auto;

  background: rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(0, 0, 0, 0);
  }
`;

export const Wrapper = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
  width: 100%;

  &:container(max-width: 50px) {
    margin-left: auto;
    box-sizing: auto;

    & ${ConfirmationWrapper} {
      width: 24px;
      height: 18px;
      justify-content: center;
    }

    & ${ConfirmedNumber} {
      font-size: 0px;
      width: 0px;
    }

    & ${CheckedIcon} {
      margin: 0;
      order: 2;
      font-size: 14px;
    }
  }
`;

export const ModalContent = styledComponents.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  border: 1px solid  ${({ theme }) => theme.palette.border.main};
`;

export const ModalTitle = styledComponents(Typography).attrs(() => ({
  variant: "caption4",
}))`
  margin-bottom: 16px;
`;

export const List = styledComponents.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 150px;

  &:first-child {
    border-right: 1px solid ${({ theme }) => theme.palette.border.main};
  }
`;

export const PendingHeading = styledComponents(Typography).attrs(() => ({
  variant: "text1Bold",
}))`
  height: 30px;
  line-height: 30px;
  margin-bottom: 8px;

  background: ${({ theme }) => theme.palette.secondary.main};
`;

export const ConfirmedHeading = styledComponents(PendingHeading)`
  background: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.common.white};
`;

export const StudentName = styledComponents(Typography).attrs(() => ({
  variant: "text1",
}))`
  padding: 0.5em;
  white-space: wrap;
`;
