import { ColorEnum, createMockStudent } from "@routine-support/domains";
import { storiesOf } from "@storybook/react-native";

import { StudentsList } from "./StudentsList";

storiesOf("Coach/Students", module).add("StudentsList", () => {
  const students = [
    createMockStudent({ name: "Ramona Red", color: ColorEnum.Red }),
    createMockStudent({ name: "Gary Green", color: ColorEnum.DarkGreen }),
    createMockStudent({ name: "Boris Brown", color: ColorEnum.Brown }),
    createMockStudent({ name: "Patrick Purple", color: ColorEnum.Purple }),
  ];

  return <StudentsList students={students} />;
});
