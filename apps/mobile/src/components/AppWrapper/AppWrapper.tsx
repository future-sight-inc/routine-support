import React, { ReactNode } from "react";

import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { NativeModules, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ToastProvider } from "react-native-toast-notifications";
import { Provider } from "react-redux";
import { NativeRouter } from "react-router-native";

import { store } from "../../app/store";
import enLocale from "../../locales/en.json";
import nlLocale from "../../locales/nl.json";
import ruLocale from "../../locales/ru.json";
import { Toast } from "../Toast";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enLocale,
    },
    ru: {
      translation: ruLocale,
    },
    ru_RU: {
      translation: ruLocale,
    },
    nl: {
      translation: nlLocale,
    },
  },
  lng:
    Platform.OS === "ios"
      ? NativeModules.SettingsManager?.settings.AppleLocale
      : NativeModules.I18nManager?.localeIdentifier,
  fallbackLng: "en",
});

interface AppWrapperProps {
  children: ReactNode;
}

export const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  return (
    <NavigationContainer>
      <NativeRouter>
        <SafeAreaProvider>
          <ApplicationProvider {...eva} theme={eva.light}>
            <ToastProvider
              renderToast={(toast) => (
                <Toast title={toast.data.title} description={toast.data.description} />
              )}
              offsetTop={64}
            >
              <IconRegistry icons={EvaIconsPack} />
              <Provider store={store}>{children}</Provider>
            </ToastProvider>
          </ApplicationProvider>
        </SafeAreaProvider>
      </NativeRouter>
    </NavigationContainer>
  );
};
