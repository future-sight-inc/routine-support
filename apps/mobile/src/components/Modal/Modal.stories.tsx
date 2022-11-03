import React from "react";

import { storiesOf } from "@storybook/react-native";
import { Typography } from "apps/mobile/src/components/Typography";

import { Modal } from "./Modal";

storiesOf("Components", module).add("Modal", () => {
  return (
    <Modal title="Modal Title" pressElement={<Typography>Press me</Typography>}>
      <Typography>Children</Typography>
    </Modal>
  );
});
