import { createMockStudent } from "@routine-support/domains";
import { storiesOf } from "@storybook/react-native";

import { StudentBadge } from "./StudentBadge";

storiesOf("Components", module).add("StudentBadge", () => {
  const student = createMockStudent();

  return <StudentBadge student={student} />;
});
