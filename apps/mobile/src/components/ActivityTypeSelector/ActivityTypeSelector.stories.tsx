import { storiesOf } from "@storybook/react-native";

import { ActivityTypeSelector } from "./ActivityTypeSelector";

storiesOf("Components", module).add("ActivityTypeSelector", () => {
  return <ActivityTypeSelector onSelect={() => null} />;
});
