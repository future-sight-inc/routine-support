import { Button } from "apps/mobile/src/components/Button";
import { Layout } from "apps/mobile/src/components/Layout";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface DayLayoutProps {
  // daySelector: ReactNode;
  // filter: ReactNode;
  // calendar: ReactNode;
}

export const DayLayout: React.FC<DayLayoutProps> = () => {
  // todo should use main layout component that based on layout component
  return (
    <Layout title="Календарь" footer={<Button text="Событие" fullWidth icon="add" />}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text>Header</Text>
        </View>
        <View style={styles.body}>
          <Text>Body</Text>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  header: {
    height: 33,
    backgroundColor: "black",
    marginBottom: 8,
  },
  body: {
    backgroundColor: "grey",
    height: "100%",
  },
});
