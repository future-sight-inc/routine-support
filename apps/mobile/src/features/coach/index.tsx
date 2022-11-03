import React from "react";

import { Route, Switch } from "react-router-native";

import { Typography } from "../../components/Typography";
import { LinkService } from "../../services/LinkService";
import { Login } from "./coach/Login";
import { MainLayout } from "./coach/MainLayout";
import { PrivateRoute } from "./coach/PrivateRoute";
import { Register } from "./coach/Register";
import { Day } from "./day/Day";
import { Students } from "./students/Students";

export const CoachEntry: React.FC = () => {
  return (
    <Switch>
      <Route exact path={LinkService.coach.login()}>
        <Login />
      </Route>
      <Route exact path={LinkService.coach.register()}>
        <Register />
      </Route>
      <PrivateRoute exact path={LinkService.coach.day()}>
        <Day />
      </PrivateRoute>
      <PrivateRoute exact path={LinkService.coach.students()}>
        <Students />
      </PrivateRoute>
      <PrivateRoute exact path={LinkService.coach.notifications()}>
        <MainLayout title="Notifications">
          <Typography>Here will be notifications</Typography>
        </MainLayout>
      </PrivateRoute>
    </Switch>
  );
};
