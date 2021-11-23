import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import React from "react";
import { Provider } from "react-redux";
import { NativeRouter, Route } from "react-router-native";
import { Day } from "../features/day";
import { Login } from "../features/student/components/Login";
import { PrivateRoute } from "../features/student/components/PrivateRoute";
import { store } from "./store";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { Profile } from "../features/student/components/Profile";

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
