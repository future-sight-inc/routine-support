import { IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import DefaultModal from "@mui/material/Modal";
import styled from "styled-components";

export const Modal = styled(DefaultModal)``;

export const ModalContent = styled(Card)`
  width: 420px;
  min-height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
