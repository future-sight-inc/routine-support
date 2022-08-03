import React from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Student as StudentType } from "@routine-support/domains";
import { getColor } from "@routine-support/ui-theme";
import { IconButton } from "apps/mobile/src/components/IconButton";
import { Typography } from "apps/mobile/src/components/Typography";
import { MobileTheme } from "apps/mobile/src/theme";
import { StyleSheet, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { StudentLocators } from "./locators";

interface StudentProps {
  student: StudentType;
  onStudentOpen: (student: StudentType) => void;
  onSettingsOpen: (student: StudentType) => void;
  onQrOpen: (student: StudentType) => void;
  onStudentDelete: (student: StudentType) => void;
}

export const Student: React.FC<StudentProps> = ({
  student,
  onStudentOpen,
  onSettingsOpen,
  onQrOpen,
  onStudentDelete,
}) => {
  const renderRightActions = () => (
    <View style={styles.deleteWrapper} onPress={() => onStudentDelete(student)}>
      <MaterialIcons name="delete" size={30} style={styles.deleteIcon} />
    </View>
  );

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.wrapper} onPress={() => onStudentOpen(student)}>
        <MaterialIcons
          name="face"
          size={66}
          style={styles.avatar}
          color={getColor(student.color)}
        />
        <Typography variant="text1">{student.name}</Typography>
        <View style={styles.buttonsBlock}>
          <IconButton
            icon="settings"
            style={styles.settingsButton}
            onPress={() => onSettingsOpen(student)}
            testID={StudentLocators.SettingsButton}
          />
          <IconButton
            icon="qr-code"
            onPress={() => onQrOpen(student)}
            testID={StudentLocators.QRButton}
          />
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
  },
  avatar: {
    height: 66,
    width: 66,
    marginRight: 16,
  },
  buttonsBlock: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
  },
  settingsButton: {
    marginRight: 8,
  },
  deleteWrapper: {
    width: 80,
    height: 80,
    backgroundColor: MobileTheme.palette.common.red,

    alignItems: "center",
    justifyContent: "center",
  },
  deleteIcon: {
    color: MobileTheme.palette.common.white,
  },
});
