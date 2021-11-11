import React from "react";
import { Layout, Text, Button } from "@ui-kitten/components";
import { useStudent } from "../student/useStudent";

export const Day: React.FC = () => {
  const {
    models: { student },
    operations: { logout },
  } = useStudent();

  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Logged as {student!.name}!</Text>
      <Button onPress={logout}>Logout</Button>
    </Layout>
  );
};
