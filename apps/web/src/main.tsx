import { StrictMode } from "react";

import { StyledEngineProvider } from "@material-ui/core/styles";
import App from "app/app";
import { store } from "app/store";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <App />
      </Provider>
    </StyledEngineProvider>
  </StrictMode>,
  document.getElementById("root")
);
