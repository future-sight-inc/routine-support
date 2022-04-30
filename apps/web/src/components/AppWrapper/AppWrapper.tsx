import { StrictMode } from "react";

import { StyledEngineProvider } from "@material-ui/core/styles";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";

import { store } from "../../app/store";
import enLocale from "../../locales/en.json";
import nlLocale from "../../locales/nl.json";
import ruLocale from "../../locales/ru.json";
import { Theme } from "../../styled/theme";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enLocale,
      },
      ru: {
        translation: ruLocale,
      },
      nl: {
        translation: nlLocale,
      },
    },
    fallbackLng: "en",
  });

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
