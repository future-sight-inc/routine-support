import { storiesOf } from "@storybook/react";

import { ErrorText } from "./ErrorText";

storiesOf("Components", module).add("ErrorText", () => (
  <ErrorText>Error message</ErrorText>
));
