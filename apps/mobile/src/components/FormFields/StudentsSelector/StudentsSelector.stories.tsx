import React from "react";

import { createMockStudent } from "@routine-support/domains";
import { storiesOf } from "@storybook/react-native";
import { useForm } from "react-hook-form";

import { StudentsSelector } from "./StudentsSelector";

const Wrapper: React.FC = () => {
  const { control } = useForm({ defaultValues: { students: [] } });
  const student1 = createMockStudent();
  const student2 = createMockStudent();
  const student3 = createMockStudent();

  return (
    <StudentsSelector
      students={[student1, student2, student3]}
      name="students"
      label="Students"
      control={control}
    />
  );
};

storiesOf("Components/FormFields", module).add("StudentsSelector", () => {
  return <Wrapper />;
});
