import { StrictMode } from "react";

import { StyledEngineProvider } from "@material-ui/core/styles";
import AdapterMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import App from "app/app";
import { store } from "app/store";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { Theme } from "styled/theme";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={Theme}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Provider store={store}>
            <App />
            <ToastContainer />
          </Provider>
        </LocalizationProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>,
  document.getElementById("root")
);
