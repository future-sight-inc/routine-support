import React from "react";

import { storiesOf } from "@storybook/react";

import { ProfileForm } from "./ProfileForm";

storiesOf("Coach", module).add("ProfileForm", () => {
  return <ProfileForm />;
});
