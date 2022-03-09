import React from "react";

import AdapterMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { useTranslation } from "react-i18next";
import { Route } from "react-router-dom";

import { Students } from "../features/students/Students";
import { Layout } from "../features/user/components/Layout";
import { LoginForm } from "../features/user/components/LoginForm";
import { PrivateRoute } from "../features/user/components/PrivateRoute";
import { RegisterForm } from "../features/user/components/RegisterForm";
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
        </Layout>
      </PrivateRoute>
    </LocalizationProvider>
  );
};

export default App;
