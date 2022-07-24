import React from "react";

import { OverlayProvider } from "@react-native-aria/overlays";
import { createMockStudent } from "@routine-support/domains";
import { storiesOf } from "@storybook/react-native";

import { Typography } from "../Typography";
import { StudentsSelector } from "./StudentsSelector";

storiesOf("Components", module).add("StudentsSelector", () => {
  const STUDENTS = new Array(11).fill("").map(createMockStudent);

  return (
    <OverlayProvider>
      <StudentsSelector
        students={STUDENTS}
        value={{}}
        pressElement={<Typography>Press me</Typography>}
        onSelect={() => null}
      />
    </OverlayProvider>
  );
});
