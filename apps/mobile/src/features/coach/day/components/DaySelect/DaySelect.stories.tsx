import { storiesOf } from "@storybook/react-native";
import React from "react";
import { DaySelect } from "./DaySelect";

storiesOf("Coach/Day", module).add("DaySelect", () => {
  return <DaySelect />;
});
