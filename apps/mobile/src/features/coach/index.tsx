import React from "react";

import { Route } from "react-router-native";

import { Login } from "./coach/Login";
import { PrivateRoute } from "./coach/PrivateRoute";
import { Register } from "./coach/Register";
import { Day } from "./day/Day";

export const CoachEntry: React.FC = () => {
  return (
    <>
      <Route exact path="/coach/login">
        <Login />
      </Route>
      <Route exact path="/coach/register">
        <Register />
      </Route>
      <PrivateRoute exact path="/coach/day">
        <Day />
      </PrivateRoute>
    </>
  );
};
