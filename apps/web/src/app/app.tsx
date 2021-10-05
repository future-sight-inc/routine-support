import React from "react";

import { Week } from "features/week";
import { Activity } from "features/activity";

export const App = () => {
  // todo: Add routing
  return (
    <div>
      <Week />
      <Activity />
    </div>
  );
};

export default App;
