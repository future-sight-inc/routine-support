import React from "react";

import { storiesOf } from "@storybook/react-native";

import { Typography } from "../Typography";
import { DateSelector } from "./DateSelector";

storiesOf("Components", module).add("DateSelector", () => {
  return (
    <DateSelector
      onSelect={(value) => console.log(value)}
      pressElement={<Typography>Press to open</Typography>}
    />
  );
});
