import React from "react";

import { storiesOf } from "@storybook/react-native";

import { Typography } from "../Typography";
import { Popup } from "./Popup";

storiesOf("Components", module).add("Popup", () => {
  return (
    <Popup pressElement={<Typography>Press me</Typography>}>
      <Typography>Content</Typography>
    </Popup>
  );
});
