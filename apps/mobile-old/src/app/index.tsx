import React from "react";

import { NativeRouter } from "react-router-native";
import { AppWrapper } from "../components/AppWrapper";
import App from "./app";

// todo Пока не получается перенести роутер в AppWrapper из-за Jest
export default () => {
  return (
    <NativeRouter>
      <AppWrapper>
        <App />
      </AppWrapper>
    </NativeRouter>
  );
};
