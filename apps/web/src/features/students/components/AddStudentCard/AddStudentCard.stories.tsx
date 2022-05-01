import React from "react";

import { storiesOf } from "@storybook/react";

import { AddStudentCard } from "./AddStudentCard";

storiesOf("Students", module).add("AddStudentCard", () => (
  <AddStudentCard onStudentModalOpen={() => null} />
));
