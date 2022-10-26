import React from "react";

import { storiesOf } from "@storybook/react-native";

import { Button } from "../Button";
import { ControlsGroup } from "./ControlsGroup";

storiesOf("Components", module).add("ControlsGroup", () => {
  return (
    <ControlsGroup>
      <Button text="sample" />
      <Button text="sample" />
    </ControlsGroup>
  );
});
