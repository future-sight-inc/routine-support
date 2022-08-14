import React from "react";

import { Student } from "@routine-support/domains";
import { getColor } from "@routine-support/ui-theme";
import { StyleSheet, View } from "react-native";

import { MobileTheme } from "../../theme";
import { Typography } from "../Typography";

interface StudentBadgeProps {
  student: Student;
  testID?: string;
}

export const StudentBadge: React.FC<StudentBadgeProps> = ({ student, testID }) => {
  return (
    <View style={[styles.wrapper, { backgroundColor: getColor(student.color) }]} testID={testID}>
      <Typography variant="text2">{student.name}</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignSelf: "flex-start",
    paddingTop: 6,
    height: 30,
    paddingHorizontal: 12,
    borderRadius: MobileTheme.borderRadius.s,
    marginRight: 8,
  },
});
