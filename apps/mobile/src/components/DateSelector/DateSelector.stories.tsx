import React from "react";

import { OverlayProvider } from "@react-native-aria/overlays";
import { storiesOf } from "@storybook/react-native";
import { StyleSheet } from "react-native";

import { DateSelector } from "./DateSelector";

storiesOf("Components", module).add("DateSelector", () => {
  return (
    <OverlayProvider>
      <DateSelector onSelect={() => null} InputProps={{ style: styles.field }} />
      <DateSelector onSelect={() => null} InputProps={{ style: styles.field }} mode="time" />
    </OverlayProvider>
  );
});

const styles = StyleSheet.create({
  field: {
    marginBottom: 8,
  },
});
