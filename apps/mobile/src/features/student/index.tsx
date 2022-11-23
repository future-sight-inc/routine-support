import React from "react";

import { Route } from "react-router-native";

import { Typography } from "../../components/Typography";
import { LinkService } from "../../services/LinkService";
import { PrivateRoute } from "./student/PrivateRoute";

export const StudentEntry: React.FC = () => {
  return (
    <>
      <Route exact path={LinkService.student.login()}>
        {console.log('login')}
      </Route>
      <PrivateRoute exact path={LinkService.student.day()}>
        <Typography>This is America</Typography>
      </PrivateRoute>
    </>
  );
};
