import { StrictMode } from "react";

import { StyledEngineProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";

import { store } from "../../app/store";
import { Theme } from "../../styled/theme";

export const AppWrapper: React.FC = ({ children }) => (
  <StrictMode>
    <Router>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={Theme}>
          <Provider store={store}>
            {children}
            <ToastContainer />
          </Provider>
        </ThemeProvider>
      </StyledEngineProvider>
    </Router>
  </StrictMode>
);
