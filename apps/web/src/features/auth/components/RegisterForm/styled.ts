import { Typography } from "@mui/material";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Title = styled(Typography).attrs(() => ({ variant: "h4" }))``;
