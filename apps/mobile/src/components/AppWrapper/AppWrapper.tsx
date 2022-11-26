import React, { ReactNode } from "react";

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
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
import { Theme } from "../../theme";
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

const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Theme.palette.primary.main,
    background: Theme.palette.common.white,
  },
};

interface AppWrapperProps {
  children: ReactNode;
}

export const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={NavigationTheme}>
        <NativeRouter>
          <ToastProvider
            renderToast={(toast) => (
              <Toast title={toast.data.title} description={toast.data.description} />
            )}
            offsetTop={64}
          >
            <Provider store={store}>{children}</Provider>
          </ToastProvider>
        </NativeRouter>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
