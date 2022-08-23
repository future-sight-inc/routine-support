import React, { useEffect, useState } from "react";

import { Student } from "@routine-support/domains";
import { StyleSheet, View } from "react-native";

import { MobileTheme } from "../../theme";
import { createOptionFromStudent } from "../../utils/createOptionFromStudent";
import { Select } from "../Select";
import { StudentBadge } from "../StudentBadge";
import { Typography } from "../Typography";
import { createStudentBadgeTestId, StudentsSelectorLocators } from "./locators";

export interface StudentsSelectorProps {
  students: Student[];
  value?: string[];
  onSelect: (value: string[]) => void;
}

export const StudentsSelector: React.FC<StudentsSelectorProps> = ({
  students,
  value: defaultValue = [],
  onSelect,
}) => {
  const [value, setValue] = useState<string[]>(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleSelect = (newValue: string[]) => {
    setValue(newValue);
    onSelect(newValue);
  };

  const selectedStudents = value
    .map((id) => students.find((student) => student._id === id)!)
    .filter(Boolean);

  return (
    <Select
      onSelect={handleSelect}
      options={students.map(createOptionFromStudent)}
      value={value}
      searchable
      multiple
      InputComponent={() =>
        selectedStudents.length ? (
          <View style={styles.wrapper} testID={StudentsSelectorLocators.Wrapper}>
            {selectedStudents.map((student) => (
              <StudentBadge
                student={student}
                testID={createStudentBadgeTestId({ id: student._id })}
              />
            ))}
          </View>
        ) : (
          <View style={styles.emptyWrapper} testID={StudentsSelectorLocators.EmptyText}>
            <Typography variant="text1" color="secondary">
              Выбрать студентов
            </Typography>
          </View>
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  emptyWrapper: {
    height: 80,
    backgroundColor: MobileTheme.palette.secondary.main,
    borderRadius: MobileTheme.borderRadius.m,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    minHeight: 80,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 8,
    backgroundColor: MobileTheme.palette.secondary.main,
    borderRadius: MobileTheme.borderRadius.m,
  },
});
