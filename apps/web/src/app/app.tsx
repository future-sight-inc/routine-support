import React from "react";

import { Route } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { LoginForm } from "../features/auth/components/LoginForm";
import { PrivateRoute } from "../features/auth/components/PrivateRoute";
import { RegisterForm } from "../features/auth/components/RegisterForm";
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
          <Route path={LinkService.home()}>
            <Week />
          </Route>
        </Layout>
      </PrivateRoute>
    </>
  );
};

export default App;
