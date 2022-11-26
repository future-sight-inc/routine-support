import { Theme } from "@routine-support/ui-theme";
import MoonLoader from "react-spinners/MoonLoader";
import styled from "styled-components";

export const SpinnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Spinner = styled(MoonLoader).attrs(() => ({
  timeMultiplier: 0.5,
  size: 30,
  color: Theme.palette.primary.main,
}))``;
