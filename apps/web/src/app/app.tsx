import React from "react";

import { Layout } from "components/Layout/Layout";
import { Week } from "features/week";
import { PrivateRoute } from "features/auth/components/PrivateRoute";
import { LinkService } from "services/LinkService";
import { Route } from "react-router-dom";
import { LoginForm } from "features/auth/components/LoginForm";

export const App = () => {
  return (
    <>
      <Route path={LinkService.login()}>
        <LoginForm />
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
