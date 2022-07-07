import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Filter } from "./Filter";

storiesOf("Coach/Day", module).add("Filter", () => {
  return <Filter />;
});
