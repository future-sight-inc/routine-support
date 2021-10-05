import styled from "styled-components";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const Wrapper = styled(Box)``;

export const SelectButton = styled(Button)`
  height: 40px;
  width: calc(50% - 0.5px);
  box-sizing: border-box;
  background: black;
  color: white;
  transition: all 0.5s;

  &:first-child {
    margin-right: 1px;
  }

  &:hover {
    background: black;
    opacity: 0.8;
  }

  &:disabled {
    background: black;
    color: white;
    opacity: 0.7;
  }
`;
