import React from "react";

import { storiesOf } from "@storybook/react-native";

import { ColorSelector } from "./ColorSelector";

storiesOf("Components", module).add("ColorSelector", () => {
  return <ColorSelector />;
});
