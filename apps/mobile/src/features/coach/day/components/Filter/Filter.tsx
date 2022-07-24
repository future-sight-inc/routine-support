import React from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Student } from "@routine-support/domains";
import { StudentsSelector } from "apps/mobile/src/components/StudentsSelector";
import { StyleSheet, View } from "react-native";

interface FilterProps {
  students: Student[];
  value: string[];
  onSelect: (value: string[]) => void;
}

export const Filter: React.FC<FilterProps> = ({ students, value, onSelect }) => {
  return (
    <StudentsSelector
      pressElement={
        <View style={styles.wrapper}>
          <MaterialIcons name="people" size={24} />
          <MaterialIcons name="arrow-drop-down" size={20} />
        </View>
      }
      students={students}
      value={value}
      onSelect={onSelect}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: { flexDirection: "row", alignItems: "center" },
});
