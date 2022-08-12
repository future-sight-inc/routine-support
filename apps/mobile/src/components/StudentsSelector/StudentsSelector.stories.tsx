import { createMockStudent } from "@routine-support/domains";
import { storiesOf } from "@storybook/react-native";

import { StudentsSelector } from "./StudentsSelector";

storiesOf("Components", module).add("StudentsSelector", () => {
  const student1 = createMockStudent({ name: "Nikita" });
  const student2 = createMockStudent({ name: "Masha" });
  const student3 = createMockStudent();
  const students = [student1, student2, student3];

  return <StudentsSelector students={students} />;
});
