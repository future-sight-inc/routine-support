import React from "react";

import AdapterMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { useTranslation } from "react-i18next";
import { Route } from "react-router-dom";

import { LoginForm } from "../features/coach/components/Forms/LoginForm";
import { RegisterForm } from "../features/coach/components/Forms/RegisterForm";
import { Layout } from "../features/coach/components/Layout";
import { PrivateRoute } from "../features/coach/components/PrivateRoute";
import { Notifications } from "../features/notifications/Notifications";
import { Students } from "../features/students/Students";
import { Week } from "../features/week";
import { LinkService } from "../services/LinkService";

export const App = () => {
  const { i18n } = useTranslation();

  return (
    <LocalizationProvider dateAdapter={AdapterMoment} locale={i18n.language}>
      <Route path={LinkService.login()}>
        <LoginForm />
      </Route>
      <Route path={LinkService.register()}>
        <RegisterForm />
      </Route>
      <PrivateRoute>
        <Layout>
          <Route exact path={LinkService.home()}>
            <Week />
          </Route>
          <Route exact path={LinkService.students()}>
            <Students />
          </Route>
          <Route exact path={LinkService.notifications()}>
            <Notifications />
          </Route>
        </Layout>
      </PrivateRoute>
    </LocalizationProvider>
  );
};

export default App;
