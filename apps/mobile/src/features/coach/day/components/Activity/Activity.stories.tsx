import {
  addStudentToActivity,
  createMockActivity,
  createMockStudent,
} from "@routine-support/domains";
import { storiesOf } from "@storybook/react-native";
import { StyleSheet, View } from "react-native";

import { Activity } from "./Activity";

storiesOf("Coach/Day", module).add("Activity", () => {
  const activity1 = createMockActivity();
  const student1 = createMockStudent();
  const activity2 = createMockActivity();

  addStudentToActivity(activity1, student1);

  return (
    <View style={styles.wrapper}>
      <Activity activity={activity1} students={[student1]} onActivityPress={() => null} />
      <View style={styles.divider} />
      <Activity activity={activity2} students={[student1]} onActivityPress={() => null} />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: { height: 170, padding: 16 },
  divider: { height: 16 },
});
