import * as ReactDOM from "react-dom";

import "react-toastify/dist/ReactToastify.css";
import App from "./app/app";
import { AppWrapper } from "./components/AppWrapper";

ReactDOM.render(
  <AppWrapper>
    <App />
  </AppWrapper>,
  document.getElementById("root")
);
