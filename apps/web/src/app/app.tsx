import React from "react";

import { Layout } from "components/Layout/Layout";
import { Week } from "features/week";
import { PrivateRoute } from "features/auth/components/PrivateRoute/PrivateRoute";
import { LinkService } from "services/LinkService";
import { Route, Switch } from "react-router-dom";

export const App = () => {
  // todo: Add routing
  return (
    <>
      <Route path={LinkService.login()}>Login haha</Route>
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
