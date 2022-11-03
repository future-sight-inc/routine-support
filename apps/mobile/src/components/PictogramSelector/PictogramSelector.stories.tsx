import React from "react";

import { PICTOGRAMS } from "@routine-support/pictograms";
import { storiesOf } from "@storybook/react-native";

import { PictogramSelector } from "./PictogramSelector";

storiesOf("Components", module).add("PictogramSelector", () => {
  return <PictogramSelector onSelect={() => null} pictograms={PICTOGRAMS} />;
});
