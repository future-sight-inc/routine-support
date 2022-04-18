import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { ContentWrapper } from "./ContentWrapper";

storiesOf("Components", module).add("ContentWrapper", () => (
  <ContentWrapper loading={boolean("Loading", false)} error={text("Error", "")}>
    {text("Children", "Some content")}
  </ContentWrapper>
));
