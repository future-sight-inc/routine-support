import React from "react";

import { Route } from "react-router-native";

import { LinkService } from "../../services/LinkService";
import { Login } from "./coach/Login";
import { PrivateRoute } from "./coach/PrivateRoute";
import { Register } from "./coach/Register";
import { Day } from "./day/Day";
import { Notifications } from "./notifications/Notifications";
import { Students } from "./students/Students";

export const CoachEntry: React.FC = () => {
  return (
    <>
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
        <Notifications />
      </PrivateRoute>
    </>
  );
};
