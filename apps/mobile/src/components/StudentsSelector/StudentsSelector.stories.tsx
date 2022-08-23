import { createMockStudent, Student } from "@routine-support/domains";
import { storiesOf } from "@storybook/react-native";

import { StudentsSelector } from "./StudentsSelector";

storiesOf("Components", module).add("StudentsSelector", () => {
  const students: Student[] = [];

  new Array(7).fill("").forEach(() => students.push(createMockStudent()));

  return (
    <StudentsSelector
      onSelect={() => null}
      students={students}
      value={[students[0]._id, students[2]._id]}
    />
  );
});
