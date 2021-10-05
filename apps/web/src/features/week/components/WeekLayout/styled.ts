import styled from "styled-components";
import Box from "@mui/material/Box";

export const Wrapper = styled(Box)`
  display: grid;
  grid-template-rows: 40px 1fr;
  grid-template-columns: 200px 1fr;
  gap: 32px;
`;

export const Head = styled(Box)`
  height: 40px;
  display: grid;
  grid-template-columns: 1fr 7fr;
  gap: 1px;
`;

export const Column = styled(Box)`
  display: grid;
  gap: 16px;
`;

export const Body = styled(Box)``;
