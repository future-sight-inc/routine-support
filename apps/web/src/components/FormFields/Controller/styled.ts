import { FormHelperText } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Error = styled(FormHelperText).attrs(() => ({ error: true }))``;
