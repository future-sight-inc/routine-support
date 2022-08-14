import { createMockStudent } from "@routine-support/domains";
import { storiesOf } from "@storybook/react-native";

import { StudentsSelector } from "./StudentsSelector";

storiesOf("Components", module).add("StudentsSelector", () => {
  const student1 = createMockStudent();
  const student2 = createMockStudent();
  const student3 = createMockStudent();

  return (
    <StudentsSelector
      onSelect={() => null}
      students={[student1, student2, student3]}
      value={[student1._id, student2._id]}
    />
  );
});
