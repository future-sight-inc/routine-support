import React from "react";

import { createMockStudent } from "@routine-support/test-utils";
import { storiesOf } from "@storybook/react";

import { StudentCard } from "./StudentCard";

const STUDENT = createMockStudent({ name: "Peter Parker" });

storiesOf("Students", module).add("StudentCard", () => (
  <StudentCard
    student={STUDENT}
    onSettingsModalOpen={() => null}
    onStudentModalOpen={() => null}
    onQROpen={() => null}
    onStudentDelete={() => null}
  />
));
