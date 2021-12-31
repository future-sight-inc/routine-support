import CheckIcon from "@mui/icons-material/Check";
import { Button, Typography } from "@mui/material";
import styled from "styled-components";

export const CheckedButton = styled(Button)`
  position: absolute;
  bottom: 4px;
  right: 8px;
  color: black;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: black 0px 1px 1px, black 0px 0px 0px 1px;
    background: none;
  }
`;

export const CheckedIcon = styled(CheckIcon)`
  font-size: 18px;
  margin-right: 2px;
`;

export const Checked = styled(Typography)`
  font-size: 16px;
`;

export const ModalContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow-y: scroll;
  border: 1px solid ${({ theme }) => theme.border.color};
  border-radius: 5px;
`;

export const ModalTitle = styled(Typography).attrs(() => ({ variant: "h5" }))`
  margin-bottom: 16px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  padding-bottom: 8px;
  &:first-child {
    border-right: 1px solid ${({ theme }) => theme.border.color};
  }
`;

export const ListHeading = styled(Typography)`
  margin-bottom: 4px;
  font-weight: bold;
  background: ${({ theme }) => theme.palette.common.grey};
  /* border-bottom: 1px solid ${({ theme }) => theme.border.color}; */
  padding: 8px;
`;
