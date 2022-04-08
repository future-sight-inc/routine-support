import CheckIcon from "@mui/icons-material/Check";
import { Typography } from "@mui/material";
import styled from "styled-container-query";

export const ConfirmedNumber = styled(Typography)``;

export const CheckedIcon = styled(CheckIcon)`
  font-size: 18px;
  margin-right: 2px;
`;

export const ConfirmationWrapper = styled.div`
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

export const ModalContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow-y: scroll;
  border: 1px solid ${({ theme }) => theme.palette.border.main};
  border-radius: 5px;
`;

export const ModalTitle = styled(Typography)`
  font-size: 24px;
  font-weight: medium;
  margin-bottom: 16px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  padding-bottom: 8px;
  &:first-child {
    border-right: 1px solid ${({ theme }) => theme.palette.border.main};
  }
`;

export const ListHeading = styled(Typography)`
  margin-bottom: 4px;
  font-weight: bold;
  background: ${({ theme }) => theme.palette.common.grey};
  padding: 8px;
`;
