import React from "react";

import { storiesOf } from "@storybook/react-native";

import { TextField } from "../TextField";
import { Label } from "./Label";

storiesOf("Components", module).add("Label", () => {
  return (
    <Label text="Label">
      <TextField />
    </Label>
  );
});
