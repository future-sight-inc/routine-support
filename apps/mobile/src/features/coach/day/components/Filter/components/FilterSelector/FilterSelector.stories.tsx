import React from "react";

import { OverlayProvider } from "@react-native-aria/overlays";
import { createMockStudent } from "@routine-support/domains";
import { storiesOf } from "@storybook/react-native";

import { Typography } from "../../../../../../../components/Typography";
import { FilterSelector } from "./FilterSelector";

storiesOf("Coach/Day/Filter", module).add("FilterSelector", () => {
  const STUDENTS = new Array(11).fill("").map(createMockStudent);

  return (
    <OverlayProvider>
      <FilterSelector
        students={STUDENTS}
        value={{}}
        pressElement={<Typography>Press me</Typography>}
        onSelect={() => null}
      />
    </OverlayProvider>
  );
});
