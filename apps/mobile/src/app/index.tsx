import React from "react";

import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Provider } from "react-redux";
import { NativeRouter } from "react-router-native";

import enLocale from "../locales/en.json";
import nlLocale from "../locales/nl.json";
import ruLocale from "../locales/ru.json";
import App from "./app";
import { store } from "./store";

i18n.use(initReactI18next).init({
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
});

export const AppWrapper: React.FC = ({ children }) => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Provider store={store}>
          <NativeRouter>{children}</NativeRouter>
        </Provider>
      </ApplicationProvider>
    </>
  );
};

export default () => {
  return (
    <AppWrapper>
      <App />
    </AppWrapper>
  );
};
