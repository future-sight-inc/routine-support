import ChevronUp from "@mui/icons-material/ExpandLess";
import ChevronDown from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

import { TextField as UITextField } from "../TextField";

export const Wrapper = styled.div`
  position: relative;
`;

export const TextField = styled(UITextField)`
  width: 100%;
  caret-color: transparent;
  cursor: pointer;
`;

export const IconDown = styled(ChevronDown).attrs(() => ({
  sx: { fontSize: 16 },
}))``;

export const IconUp = styled(ChevronUp).attrs(() => ({
  sx: { fontSize: 16 },
}))``;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 8px;
  pointer-events: none;
`;
