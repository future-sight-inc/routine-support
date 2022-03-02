import { StrictMode } from "react";

import { StyledEngineProvider } from "@material-ui/core/styles";
import AdapterMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import i18n from "i18next";
import * as ReactDOM from "react-dom";
import { initReactI18next } from "react-i18next";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

import "react-toastify/dist/ReactToastify.css";
import App from "./app/app";
import { store } from "./app/store";
import enLocale from "./locales/en.json";
import nlLocale from "./locales/nl.json";
import ruLocale from "./locales/ru.json";
import { Theme } from "./styled/theme";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: { translation: enLocale },
      ru: {
        translation: ruLocale,
      },
      nl: {
        translation: nlLocale,
      },
    },
    // todo Брать текущий язык откуда-нибудь
    lng: "ru", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
  });

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
