import { StrictMode } from "react";

import { StyledEngineProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";

import { store } from "../../app/store";
import { Theme } from "../../styled/theme";

// todo Выпилить фиксом, проблемы в библиотеках
export const AppWrapper: React.FC<{ children: any }> = ({ children }) => (
  <StrictMode>
    <Router>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={Theme}>
          <Provider store={store}>{children}</Provider>
        </ThemeProvider>
      </StyledEngineProvider>
    </Router>
  </StrictMode>
);
