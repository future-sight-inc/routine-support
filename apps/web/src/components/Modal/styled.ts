import { IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import DefaultModal from "@mui/material/Modal";
import styled from "styled-components";

export const Modal = styled(DefaultModal)``;

export const ModalContent = styled(Card)`
  width: 400px;
  min-height: 400px;
  ${({ theme }) => theme.position.absoluteCenter}
  outline: none;
  padding: 32px;
`;

export const IconWrapper = styled(IconButton)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
`;
