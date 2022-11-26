import { Theme } from "@routine-support/ui-theme";
import MoonLoader from "react-spinners/MoonLoader";
import styled from "styled-components";

import { ErrorText as UIErrorText } from "../ErrorText";

export const Wrapper = styled.div`
  height: 100%;
  box-sizing: border-box;
  padding: 16px;
  overflow: scroll;
`;

export const ErrorWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorText = styled(UIErrorText)``;

export const SpinnerWrapper = styled(Wrapper)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled(MoonLoader).attrs(() => ({
  timeMultiplier: 0.5,
  size: 30,
  color: Theme.palette.primary.main,
}))``;
