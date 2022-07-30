import UILanguageIcon from "@mui/icons-material/Language";
import styled from "styled-components";

import { TextField as UITextField } from "../TextField/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 140px;
`;

export const LanguageIcon = styled(UILanguageIcon)``;

export const TextField = styled(UITextField)`
  background: none;
`;
