import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import React from "react";
import { Provider } from "react-redux";
import { NativeRouter, Route } from "react-router-native";
import { Day } from "../features/day/Day";
import { Login } from "../features/student/components/Login";
import { PrivateRoute } from "../features/student/components/PrivateRoute";
import { store } from "./store";

export const App = () => {
  return (
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
          </PrivateRoute>
        </NativeRouter>
      </Provider>
    </ApplicationProvider>
  );
};

export default App;
