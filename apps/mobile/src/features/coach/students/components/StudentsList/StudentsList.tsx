import React from "react";

import { Student as StudentType } from "@routine-support/domains";
import { Typography } from "apps/mobile/src/components/Typography";
import { MobileTheme } from "apps/mobile/src/theme";
import { FlatList, StyleSheet, View } from "react-native";

import { Student } from "../Student";


interface StudentsListProps {
  students: StudentType[];
}

export const StudentsList: React.FC<StudentsListProps> = ({ students }) => {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListEmptyComponent={
        <Typography variant="text1" color="secondary" style={styles.emptyListText}>
          No students
        </Typography>
      }
      data={students}
      renderItem={({ item }) => (
        <Student
          key={item._id}
          student={item}
          onStudentOpen={() => null}
          onSettingsOpen={() => null}
          onQrOpen={() => null}
          onStudentDelete={() => null}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    marginLeft: 16,
    backgroundColor: MobileTheme.palette.border.normal,
  },
  emptyListText: {
    textAlign: "center",
  },
});
