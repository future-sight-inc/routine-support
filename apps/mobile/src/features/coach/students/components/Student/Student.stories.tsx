import { createMockStudent } from "@routine-support/domains";
import { storiesOf } from "@storybook/react-native";

import { Student } from "./Student";

storiesOf("Coach/Students", module).add("Student", () => {
  const student = createMockStudent();

  return (
    <Student
      student={student}
      onStudentOpen={() => null}
      onSettingsOpen={() => null}
      onQrOpen={() => null}
      onStudentDelete={() => null}
    />
  );
});
