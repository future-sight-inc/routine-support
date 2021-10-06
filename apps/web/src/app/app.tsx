import React from "react";

import { Activity } from "features/activity";
import { Week } from "features/week";

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
