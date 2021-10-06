import Card from "@mui/material/Card";
import DefaultModal from "@mui/material/Modal";
import styled from "styled-components";

export const Modal = styled(DefaultModal)``;

export const ModalContent = styled(Card)`
  width: 400px;
  min-height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
