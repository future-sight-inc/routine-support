import React, { ReactNode, useState } from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createMockStudent, Student } from "@routine-support/domains";
import { FlatList, StyleSheet, TouchableWithoutFeedback, View } from "react-native";

import { MobileTheme } from "../../theme";
import { InputModal } from "../InputModal";
import { Typography } from "../Typography";
import { createStudentTestId } from "./locators";

interface StudentsSelectorProps {
  students: Student[];
  value: string[];
  pressElement: ReactNode;
  onSelect: (value: string[]) => void;
}

export const StudentsSelector: React.FC<StudentsSelectorProps> = ({
  students,
  value,
  pressElement,
  onSelect,
}) => {
  const [selected, setSelected] = useState<string[]>(value || []);

  const isStudentSelected = (student: Student): boolean => {
    return selected.includes(student._id);
  };

  const handleStudentToggle = (student: Student) => {
    const isCurrentStudentSelected = isStudentSelected(student);

    if (isCurrentStudentSelected) {
      setSelected((selected) => selected.filter((id) => student._id !== id));
    } else {
      setSelected((selected) => [...selected, student._id]);
    }
  };

  const handleConfirm = () => {
    onSelect(selected);
  };

  return (
    <InputModal
      pressElement={pressElement}
      input={
        <FlatList
          data={[createMockStudent({ _id: "common", name: "Common" }), ...students]}
          renderItem={({ item: student }) => (
            <TouchableWithoutFeedback
              onPress={() => handleStudentToggle(student)}
              testID={createStudentTestId({ student, isSelected: isStudentSelected(student) })}
            >
              <View style={styles.studentWrapper}>
                <View
                  style={{
                    ...styles.checkWrapper,
                    backgroundColor: isStudentSelected(student)
                      ? MobileTheme.palette.primary.main
                      : MobileTheme.palette.common.white,
                  }}
                >
                  <MaterialIcons name="check" size={16} color="white" />
                </View>
                <Typography variant="caption4Normal">{student.name}</Typography>
              </View>
            </TouchableWithoutFeedback>
          )}
          keyExtractor={(item) => item._id}
          style={styles.wrapper}
        />
      }
      onConfirm={handleConfirm}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: { marginTop: 16, height: 250 },
  studentWrapper: {
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  checkWrapper: {
    width: 23,
    height: 23,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: MobileTheme.palette.primary.main,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
});
