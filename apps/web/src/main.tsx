import { StrictMode } from "react";

import App from "app/app";
import { store } from "app/store";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { StyledEngineProvider } from "@material-ui/core/styles";

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
