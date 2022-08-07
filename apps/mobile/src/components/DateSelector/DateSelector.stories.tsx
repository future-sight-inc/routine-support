import React from "react";

import { storiesOf } from "@storybook/react-native";
import { StyleSheet } from "react-native";

import { DateSelector } from "./DateSelector";

storiesOf("Components", module).add("DateSelector", () => {
  return (
    <>
      <DateSelector onSelect={() => null} InputProps={{ style: styles.field }} />
      <DateSelector onSelect={() => null} InputProps={{ style: styles.field }} mode="time" />
    </>
  );
});

const styles = StyleSheet.create({
  field: {
    marginBottom: 8,
  },
});
