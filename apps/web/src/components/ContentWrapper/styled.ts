import { CircularProgress } from "@mui/material";
import styled from "styled-components";

import { Button } from "../../styled/components/Button";
import { ErrorText as UIErrorText } from "../ErrorText";

export const ErrorWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export const ErrorText = styled(UIErrorText)``;

export const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Spinner = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ReloadButton = styled(Button)`
  margin-left: 16px;
`;
