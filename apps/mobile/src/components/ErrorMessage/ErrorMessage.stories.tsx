import React from "react";

import { storiesOf } from "@storybook/react-native";

import { ErrorMessage } from "./ErrorMessage";

storiesOf("Components", module).add("ErrorMessage", () => {
  return <ErrorMessage>Error message</ErrorMessage>;
});
