import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import React from "react";
import { Provider } from "react-redux";
import { NativeRouter, Route } from "react-router-native";
import { Day } from "../features/day/components/Day";
import { Schedule } from "../features/day/components/Schedule";
import { Login } from "../features/student/components/Login";
import { PrivateRoute } from "../features/student/components/PrivateRoute";
import { Profile } from "../features/student/components/Profile";
import { store } from "./store";

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
                <Schedule />
              </Route>
              <Route exact path="/day">
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
