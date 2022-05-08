import React from "react";

import { storiesOf } from "@storybook/react";

import { ConfirmationModal } from "./ConfirmationModal";

storiesOf("Components", module).add("ConfirmationModal", () => {
  return (
    <ConfirmationModal
      isOpened
      onConfirm={() => null}
      onClose={() => null}
      title="Modal title"
      description="Modal description"
    />
  );
});
