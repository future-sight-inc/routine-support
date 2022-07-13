import React from "react";

import { storiesOf } from "@storybook/react-native";

import { Filter } from "./Filter";

storiesOf("Coach/Day", module).add("Filter", () => {
  return <Filter />;
});
