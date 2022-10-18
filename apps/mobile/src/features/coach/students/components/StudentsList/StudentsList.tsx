import React from "react";

import { Student as StudentType } from "@routine-support/domains";
import { Typography } from "apps/mobile/src/components/Typography";
import { MobileTheme } from "apps/mobile/src/theme";
import { FlatList, StyleSheet, View } from "react-native";

import { Student } from "../Student";

interface StudentsListProps {
  students: StudentType[];
  onStudentOpen: (student: StudentType) => void;
  onSettingsOpen: (student: StudentType) => void;
  onQrOpen: (student: StudentType) => void;
  onStudentDelete: (student: StudentType) => void;
}

export const StudentsList: React.FC<StudentsListProps> = ({
  students,
  onStudentOpen,
  onSettingsOpen,
  onQrOpen,
  onStudentDelete,
}) => {
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
          student={item}
          onStudentOpen={() => onStudentOpen(item)}
          onSettingsOpen={() => onSettingsOpen(item)}
          onQrOpen={() => onQrOpen(item)}
          onStudentDelete={() => onStudentDelete(item)}
        />
      )}
      keyExtractor={(item) => item._id}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: MobileTheme.palette.border.light,
  },
  emptyListText: {
    textAlign: "center",
  },
});
