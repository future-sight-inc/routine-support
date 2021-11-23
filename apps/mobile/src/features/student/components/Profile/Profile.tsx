import { Student } from "@routine-support/models";
import {
  Button,
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { useProfileComponent } from "./hooks";

export interface ProfileActions {
  logout: () => void;
}

interface ProfileProps {
  student: Student;
  actions: ProfileActions;
}

export const Profile: React.FC<ProfileProps> = ({ student, actions }) => {
  const {
    operations: { handleBackPress, handleLogout },
  } = useProfileComponent(actions);

  return (
    <Layout
      style={{
        flex: 1,
        alignItems: "center",

        padding: 32,
        paddingTop: 64,
        ...StyleSheet.absoluteFillObject,
      }}
    >
      <Layout style={{ width: "100%" }}>
        <TopNavigation
          alignment="center"
          title="Profile"
          accessoryLeft={
            <TopNavigationAction
              icon={(props) => (
                <Icon {...props} name="arrow-back" onPress={handleBackPress} />
              )}
            />
          }
        />
        <Divider />
      </Layout>

      <Layout style={{ marginTop: 32 }}>
        <Text category="h6" style={{ textAlign: "center" }} appearance="hint">
          You logged as:
        </Text>
        <Text category="h3" style={{ textAlign: "center", marginTop: 8 }}>
          {student.name}
        </Text>
      </Layout>

      <Button
        onPress={handleLogout}
        size="giant"
        style={{ width: "100%", marginTop: "auto" }}
        accessoryLeft={(props) => <Icon {...props} name="log-out" />}
      >
        Logout
      </Button>
    </Layout>
  );
};
