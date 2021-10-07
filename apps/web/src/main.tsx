import { StrictMode } from "react";

import { StyledEngineProvider } from "@material-ui/core/styles";
import App from "app/app";
import { store } from "app/store";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Theme } from "styled/theme";

ReactDOM.render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={Theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>,
  document.getElementById("root")
);
