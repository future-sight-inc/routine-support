import React from "react";

import { storiesOf } from "@storybook/react-native";
import moment from "moment";

import { DaySelect } from "./DaySelect";

storiesOf("Components", module).add("DaySelect", () => {
  return <DaySelect date={moment()} onSelect={() => null} />;
});
