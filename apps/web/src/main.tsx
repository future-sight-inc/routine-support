import { StrictMode } from "react";

import { StyledEngineProvider } from "@material-ui/core/styles";
import AdapterMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

import "react-toastify/dist/ReactToastify.css";
import { store } from "./app/store";
import App from "./app/app";
import { Theme } from "./styled/theme";

ReactDOM.render(
  <StrictMode>
    <Router>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={Theme}>
          <LocalizationProvider dateAdapter={AdapterMoment} locale={"ru"}>
            <Provider store={store}>
              <App />
              <ToastContainer />
            </Provider>
          </LocalizationProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </Router>
  </StrictMode>,
  document.getElementById("root")
);
