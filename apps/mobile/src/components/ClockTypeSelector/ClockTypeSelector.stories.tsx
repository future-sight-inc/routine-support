import { storiesOf } from "@storybook/react-native";

import { ClockTypeSelector } from "./ClockTypeSelector";

storiesOf("Components", module).add("ClockTypeSelector", () => {
  return <ClockTypeSelector onSelect={() => null} />;
});
