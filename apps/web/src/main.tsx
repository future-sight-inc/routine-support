import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import * as ReactDOM from "react-dom";
import { initReactI18next } from "react-i18next";

import "react-toastify/dist/ReactToastify.css";
import App from "./app/app";
import { AppWrapper } from "./components/AppWrapper";
import enLocale from "./locales/en.json";
import nlLocale from "./locales/nl.json";
import ruLocale from "./locales/ru.json";

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

ReactDOM.render(
  <AppWrapper>
    <App />
  </AppWrapper>,
  document.getElementById("root")
);
