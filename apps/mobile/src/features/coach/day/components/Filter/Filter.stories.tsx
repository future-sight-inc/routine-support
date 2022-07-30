import React from "react";

import { OverlayProvider } from "@react-native-aria/overlays";
import { createMockStudent } from "@routine-support/domains";
import { storiesOf } from "@storybook/react-native";

import { Filter } from "./Filter";

storiesOf("Coach/Day", module).add("Filter", () => {
  const STUDENTS = new Array(11).fill("").map(createMockStudent);

  return (
    <OverlayProvider>
      <Filter students={STUDENTS} value={["common"]} onSelect={() => null} />
    </OverlayProvider>
  );
});
