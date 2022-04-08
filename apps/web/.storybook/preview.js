import { StyledEngineProvider } from "@material-ui/core/styles";
import { addDecorator } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "../src/styled/theme";

addDecorator((storyFn) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={Theme}>{storyFn()}</ThemeProvider>
  </StyledEngineProvider>
));
