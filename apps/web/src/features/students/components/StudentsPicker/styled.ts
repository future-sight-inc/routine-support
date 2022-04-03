import { Box } from "@mui/material";
import { MenuItem as UIMenuItem } from "@mui/material";
import { Button } from "apps/web/src/styled/components/Button";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
  width: 100%;
`;

export const OpenButton = styled(Button)`
  width: 200px;
  margin: 8px 0;
`;

export const MenuItem = styled(UIMenuItem)`
  width: 200px;
`;

export const StudentsWrapper = styled(Box).attrs(() => ({
  sx: {
    display: "flex",
    flexWrap: "wrap",
    gap: 1,
  },
}))``;
