import React, { useState } from "react";

import { Student } from "@routine-support/domains";
import { StyleSheet, View } from "react-native";

import { MobileTheme } from "../../theme";
import { createOptionFromStudent } from "../../utils/createOptionFromStudent";
import { Select } from "../Select";
import { StudentBadge } from "../StudentBadge";
import { Typography } from "../Typography";

interface StudentsSelectorProps {
  students: Student[];
}

export const StudentsSelector: React.FC<StudentsSelectorProps> = ({ students }) => {
  const [ids, setIds] = useState<string[]>([]);

  const handleSelect = (value: string[]) => {
    setIds(value);
  };

  return (
    <Select
      onSelect={handleSelect}
      options={students.map(createOptionFromStudent)}
      searchable
      multiple
      InputComponent={() =>
        ids.length ? (
          <View style={styles.wrapper}>
            {ids.map((id) => (
              <StudentBadge student={students.find((student) => student._id === id)!} />
            ))}
          </View>
        ) : (
          <View style={styles.emptyWrapper}>
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
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 8,
    backgroundColor: MobileTheme.palette.secondary.main,
    borderRadius: MobileTheme.borderRadius.m,
  },
});
