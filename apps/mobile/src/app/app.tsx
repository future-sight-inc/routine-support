import React from "react";

import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Provider } from "react-redux";
import { NativeRouter, Route } from "react-router-native";

import { Day } from "../features/day/components/Day";
import { Login } from "../features/student/components/Login";
import { PrivateRoute } from "../features/student/components/PrivateRoute";
import { Profile } from "../features/student/components/Profile";
import enLocale from "../locales/en.json";
import nlLocale from "../locales/nl.json";
import ruLocale from "../locales/ru.json";
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
  fallbackLng: "en",
});

export const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Provider store={store}>
          <NativeRouter>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute>
              <Route exact path="/">
                <Day />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
            </PrivateRoute>
          </NativeRouter>
        </Provider>
      </ApplicationProvider>
    </>
  );
};

export default App;
