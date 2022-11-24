import React from "react";

import { Student as StudentType } from "@routine-support/domains";
import { Typography } from "apps/mobile/src/components/Typography";
import { Theme } from "apps/mobile/src/theme";
import { FlatList, StyleSheet, View } from "react-native";

import { Student } from "../Student";

interface StudentsListProps {
  loading: boolean;
  students: StudentType[];
  onStudentOpen: (student: StudentType) => void;
  onSettingsOpen: (student: StudentType) => void;
  onStudentDelete: (student: StudentType) => void;
}

export const StudentsList: React.FC<StudentsListProps> = ({
  loading,
  students,
  onStudentOpen,
  onSettingsOpen,
  onStudentDelete,
}) => {
  return (
    <FlatList
      refreshing={loading}
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
    backgroundColor: Theme.palette.border.light,
    marginLeft: 16,
  },
  emptyListText: {
    marginTop: 16,
    textAlign: "center",
  },
});
