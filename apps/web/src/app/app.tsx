import React from "react";

import { useTranslation } from "react-i18next";

export const App = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* <Route path={LinkService.login()}>
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
      </PrivateRoute> */}
      {t("Welcome to React")}
    </>
  );
};

export default App;
