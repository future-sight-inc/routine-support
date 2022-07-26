import React from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ActivityFilter, Student } from "@routine-support/domains";
import { StyleSheet, View } from "react-native";

import { FilterSelector } from "./components/FilterSelector";

interface FilterProps {
  students: Student[];
  value: ActivityFilter;
  onSelect: (value: ActivityFilter) => void;
}

export const Filter: React.FC<FilterProps> = ({ students, value, onSelect }) => {
  return (
    <FilterSelector
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
