import { createRoot } from "react-dom/client";

import "react-toastify/dist/ReactToastify.css";
import App from "./app/app";
import { AppWrapper } from "./components/AppWrapper";

const domContainer = document.getElementById("root");
const root = createRoot(domContainer as any);

root.render(
  <AppWrapper>
    <App />
  </AppWrapper>
);
