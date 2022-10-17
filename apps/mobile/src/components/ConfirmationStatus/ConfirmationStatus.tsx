import React from "react";

import { Activity, getActivityStatusesFromStudents, Student } from "@routine-support/domains";
import { StyleSheet, View } from "react-native";

import { StudentBadge } from "../StudentBadge";
import { Typography } from "../Typography";

interface ConfirmationStatusProps {
  activity: Activity;
  students: Student[];
}

export const ConfirmationStatus: React.FC<ConfirmationStatusProps> = ({ activity, students }) => {
  const { pendingStudents, confirmedStudents } = getActivityStatusesFromStudents(
    activity,
    students
  );

  return (
    <View style={styles.wrapper}>
      <Typography style={styles.title} variant="caption4">
        Статус прохождения
      </Typography>
      {pendingStudents.length > 0 && (
        <>
          <Typography>Ожидаются</Typography>
          <View style={styles.studentsWrapper}>
            {pendingStudents.map((student) => (
              <StudentBadge student={student} />
            ))}
          </View>
        </>
      )}
      {confirmedStudents.length > 0 && (
        <>
          <Typography>Прошли {confirmedStudents.length}/16</Typography>
          <View style={styles.studentsWrapper}>
            {confirmedStudents.map((student) => (
              <StudentBadge student={student} />
            ))}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { minHeight: 200 },
  title: { textAlign: "center", marginBottom: 16 },
  studentsWrapper: { flexDirection: "row", flexWrap: "wrap", marginTop: 8 },
});
