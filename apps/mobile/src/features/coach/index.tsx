import React from "react";

import { Route, Switch } from "react-router-native";

import { LinkService } from "../../services/LinkService";
import { Login } from "./coach/Login";
import { PrivateRoute } from "./coach/PrivateRoute";
import { Register } from "./coach/Register";
import { Day } from "./day/Day";

export const CoachEntry: React.FC = () => {
  return (
    <Switch>
      <Route exact path={LinkService.coach.login()}>
        <Login />
      </Route>
      <Route exact path={LinkService.coach.login()}>
        <Register />
      </Route>
      <PrivateRoute exact path={LinkService.coach.day()}>
        <Day />
      </PrivateRoute>
    </Switch>
  );
};
