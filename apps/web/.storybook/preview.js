import { StyledEngineProvider } from "@material-ui/core/styles";
import { addDecorator } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "../src/styled/theme";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import enLocale from "../src/locales/en.json";
import nlLocale from "../src/locales/nl.json";
import ruLocale from "../src/locales/ru.json";
import { BrowserRouter as Router } from "react-router-dom";

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

addDecorator((storyFn) => (
  <Router>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={Theme}>{storyFn()}</ThemeProvider>
    </StyledEngineProvider>
  </Router>
));
