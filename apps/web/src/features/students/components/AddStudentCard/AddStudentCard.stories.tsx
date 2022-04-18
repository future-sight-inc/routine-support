import React from "react";

import { storiesOf } from "@storybook/react";

import { AddStudentCard } from "./AddStudentCard";

storiesOf("Components", module).add("AddStudentCard", () => (
  <AddStudentCard onStudentAdd={() => null} />
));
