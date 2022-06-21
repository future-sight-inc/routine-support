import React from "react";

import { storiesOf } from "@storybook/react";

import { ProfileModal } from "./ProfileModal";

storiesOf("Coach", module).add("ProfileModal", () => {
  return (
    <ProfileModal
      isOpened
      actions={{ closeModal: () => null, deleteCoach: () => null }}
    />
  );
});
