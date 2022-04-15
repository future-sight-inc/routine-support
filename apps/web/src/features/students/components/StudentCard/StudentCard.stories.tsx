import React from "react";

import { createMockStudent } from "@routine-support/test-utils";
import { storiesOf } from "@storybook/react";

import { StudentCard } from "./StudentCard";

const STUDENT = createMockStudent({ name: "Peter Parker", color: "pink" });

storiesOf("Components", module).add("StudentCard", () => (
  <StudentCard
    student={STUDENT}
    onStudentModify={() => null}
    onStudentSettings={() => null}
    onQROpen={() => null}
    onStudentDelete={() => null}
  />
));
