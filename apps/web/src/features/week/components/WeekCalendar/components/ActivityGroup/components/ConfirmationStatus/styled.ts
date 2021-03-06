import CheckIcon from "@mui/icons-material/Check";
import { Typography } from "apps/web/src/styled/components/Typography";
import styledComponents from "styled-components";
import styled from "styled-container-query";

const ConfirmedNumberText = styledComponents(Typography).attrs(() => ({
  variant: "text2Bold",
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
  border-radius: ${({ theme }) => theme.borderRadius.s};
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
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ModalTitle = styledComponents(Typography).attrs(() => ({
  variant: "caption4",
}))``;

export const Section = styledComponents.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SectionTitle = styledComponents(Typography).attrs(() => ({
  variant: "text1",
}))``;

export const StudentsWrapper = styledComponents.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
