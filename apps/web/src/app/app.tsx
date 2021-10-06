import React from "react";

import { Layout } from "components/Layout/Layout";
import { Activity } from "features/activity";
import { Week } from "features/week";

export const App = () => {
  // todo: Add routing
  return (
    <Layout>
      <Week />
      <Activity />
    </Layout>
  );
};

export default App;
