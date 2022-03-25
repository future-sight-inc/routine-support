import { IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import DefaultModal from "@mui/material/Modal";
import styled from "styled-components";

export const Modal = styled(DefaultModal)``;

export const ModalContent = styled(Card)`
  width: 400px;
  min-height: 80px;
  ${({ theme }) => theme.position.absoluteCenter}
  outline: none;
  padding: 32px;
  max-height: 80vh;
  overflow: scroll;
`;

export const IconWrapper = styled(IconButton)`
  position: absolute;
  top: 8px;
  right: 8px;

  width: 24px;
  height: 24px;
`;
