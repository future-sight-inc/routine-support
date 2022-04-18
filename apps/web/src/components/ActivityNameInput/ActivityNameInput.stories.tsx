import { storiesOf } from "@storybook/react";

import { ActivityNameInput } from "./ActivityNameInput";

storiesOf("Components", module).add("ActivityNameInput", () => (
  <ActivityNameInput placeholder="New activity name" />
));
