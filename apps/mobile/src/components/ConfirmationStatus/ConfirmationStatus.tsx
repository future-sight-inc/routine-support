import React, { useState } from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Activity, getActivityStatusesFromStudents, Student } from "@routine-support/domains";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Theme } from "../../theme";
import { Popup } from "../Popup";
import { StudentBadge } from "../StudentBadge";
import { Typography } from "../Typography";

interface ConfirmationStatusProps {
  activity: Activity;
  students: Student[];
}

export const ConfirmationStatus: React.FC<ConfirmationStatusProps> = ({ activity, students }) => {
  const [isOpened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  };

  const handleClose = () => {
    setOpened(false);
  };

  const { pendingStudents, confirmedStudents, assignedStudents } = getActivityStatusesFromStudents(
    activity,
    students
  );

  return (
    <>
      <Popup isOpened={isOpened} onClose={handleClose}>
        <View style={styles.wrapper}>
          <Typography style={styles.title} variant="caption4">
            Статус прохождения
          </Typography>
          {pendingStudents.length > 0 && (
            <>
              <Typography>
                Ожидаются {pendingStudents.length}/{assignedStudents.length}
              </Typography>
              <View style={styles.studentsWrapper}>
                {pendingStudents.map((student) => (
                  <StudentBadge student={student} />
                ))}
              </View>
            </>
          )}
          {confirmedStudents.length > 0 && (
            <>
              <Typography>
                Прошли {confirmedStudents.length}/{assignedStudents.length}
              </Typography>
              <View style={styles.studentsWrapper}>
                {confirmedStudents.map((student) => (
                  <StudentBadge student={student} />
                ))}
              </View>
            </>
          )}
        </View>
      </Popup>
      <TouchableOpacity style={styles.confirmationStatusWrapper} onPress={handleOpen}>
        <MaterialIcons name="check" size={14} />
        <Typography variant="text2Bold" style={styles.confirmationStatus}>
          {confirmedStudents.length}/{assignedStudents.length}
        </Typography>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  confirmationStatusWrapper: {
    position: "absolute",
    bottom: 8,
    right: 8,
    flexDirection: "row",
    alignItems: "center",
    height: 30,
    paddingHorizontal: 8,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Theme.borderRadius.s,
  },
  confirmationStatus: { marginLeft: 2 },
  wrapper: { minHeight: 200 },
  title: { textAlign: "center", marginBottom: 16 },
  studentsWrapper: { flexDirection: "row", flexWrap: "wrap", marginTop: 8 },
});
