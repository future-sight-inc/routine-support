import { StrictMode } from "react";

import { StyledEngineProvider } from "@mui/material/styles";
import { Theme } from "@routine-support/ui-theme";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { store } from "../../app/store";
import enLocale from "../../locales/en.json";
import nlLocale from "../../locales/nl.json";
import ruLocale from "../../locales/ru.json";

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

// todo Выпилить фиксом, проблемы в библиотеках
export const AppWrapper: React.FC<{ children: any }> = ({ children }) => (
  <StrictMode>
    <Router>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={Theme}>
          <Provider store={store}>{children}</Provider>
        </ThemeProvider>
      </StyledEngineProvider>
    </Router>
  </StrictMode>
);
