import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import styled from "styled-components";

export const Wrapper = styled(Box)`
  display: grid;
  /* 100vh - высота шапки - отступ контейнера - высота выбора недели - отступ между колонками */
  grid-template-rows: 40px calc(100vh - 60px - 64px - 40px - 16px);
  grid-template-columns: 200px 1fr;
  gap: 16px;
  overflow: hidden;
`;

export const Head = styled(Box)`
  height: 40px;
  display: grid;
  grid-template-columns: 140px 7fr;
  gap: 1px;
`;

export const Column = styled(Box)`
  height: 100vh;
  display: grid;
  gap: 16px;
  grid-template-rows: 40px calc(100vh - 40px - 16px);
`;

export const ButtonWrapper = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

export const Body = styled(Box)`
  position: relative;
`;

export const Spinner = styled(CircularProgress)`
  ${({ theme }) => theme.position.absoluteCenter};
`;
