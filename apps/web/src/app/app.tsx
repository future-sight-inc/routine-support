import React from "react";

import { Route } from "react-router-dom";

import { Students } from "../features/students/Students";
import { Layout } from "../features/user/components/Layout";
import { LoginForm } from "../features/user/components/LoginForm";
import { PrivateRoute } from "../features/user/components/PrivateRoute";
import { RegisterForm } from "../features/user/components/RegisterForm";
import { Week } from "../features/week";
import { LinkService } from "../services/LinkService";

export const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
