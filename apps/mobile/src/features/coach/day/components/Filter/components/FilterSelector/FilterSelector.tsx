import React, { ReactNode, useState } from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ActivityFilter, createMockStudent, Student } from "@routine-support/domains";
import { FlatList, StyleSheet, TouchableWithoutFeedback, View } from "react-native";

import { InputModal } from "../../../../../../../components/InputModal";
import { Typography } from "../../../../../../../components/Typography";
import { MobileTheme } from "../../../../../../../theme";
import { createStudentTestId } from "./locators";

interface FilterSelectorProps {
  students: Student[];
  value: ActivityFilter;
  pressElement: ReactNode;
  onSelect: (filter: ActivityFilter) => void;
}

export const FilterSelector: React.FC<FilterSelectorProps> = ({
  students,
  value: defaultFilter,
  pressElement,
  onSelect,
}) => {
  const [filter, setFilter] = useState<ActivityFilter>(defaultFilter);

  const handleStudentToggle = (student: Student) => {
    const isCurrentStudentSelected = filter[student._id];

    if (isCurrentStudentSelected) {
      const newFilter = {};

      Object.keys(filter)
        .filter((key) => key !== student._id)
        .forEach((key) => {
          newFilter[key] = true;
        });

      setFilter(newFilter);
    } else {
      setFilter({ ...filter, [student._id]: true });
    }
  };

  const handleConfirm = () => {
    onSelect(filter);
  };

  const handleClose = () => {
    setFilter(defaultFilter);
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
              testID={createStudentTestId({ student, isSelected: filter[student._id] })}
            >
              <View style={styles.studentWrapper}>
                <View
                  style={{
                    ...styles.checkWrapper,
                    backgroundColor: filter[student._id]
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
      onClose={handleClose}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: { height: 300, marginTop: 8 },
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
