import { storiesOf } from "@storybook/react-native";
import { Activity } from "./Activity";
import { View, StyleSheet } from "react-native";
import { createMockActivity } from "@routine-support/domains";

storiesOf("Coach/Day", module).add("Activity", () => {
  const activity = createMockActivity();

  return (
    <View style={styles.wrapper}>
      <Activity activity={activity} />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: { height: 170, padding: 16 },
});
