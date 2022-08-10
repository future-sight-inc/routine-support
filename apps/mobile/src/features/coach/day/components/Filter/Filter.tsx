import React from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ActivityFilter, Student } from "@routine-support/domains";
import { COMMON_ACTIVITY_COLOR } from "@routine-support/ui-theme";
import { Select } from "apps/mobile/src/components/Select";
import { createOptionFromStudent } from "apps/mobile/src/utils/createOptionFromStudent";
import { StyleSheet, View } from "react-native";

interface FilterProps {
  students: Student[];
  value: ActivityFilter;
  onSelect: (value: ActivityFilter) => void;
}

export const Filter: React.FC<FilterProps> = ({ students, value, onSelect }) => {
  return (
    <Select
      InputComponent={() => (
        <View style={styles.wrapper}>
          <MaterialIcons name="people" size={24} />
          <MaterialIcons name="arrow-drop-down" size={20} />
        </View>
      )}
      options={[
        { value: "common", text: "Common", color: COMMON_ACTIVITY_COLOR },
        ...students.map(createOptionFromStudent),
      ]}
      multiple
      value={value}
      onSelect={onSelect}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: { flexDirection: "row", alignItems: "center" },
});
