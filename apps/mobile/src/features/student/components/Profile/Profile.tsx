import React from "react";

import { Student } from "@routine-support/domains";
import {
  Button,
  Icon,
  Layout,
  Text,
  TopNavigationAction,
} from "@ui-kitten/components";
import { useTranslation } from 'react-i18next';

import { MainLayout } from "../../../../components/MainLayout";
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
  const { t } = useTranslation()

  return (
    <MainLayout
      title="Profile"
      accessoryLeft={
        <TopNavigationAction
          icon={(props) => (
            <Icon
              {...props}
              name="arrow-back"
              onPress={handleBackPress}
              fill="white"
            />
          )}
        />
      }
    >
      <Layout style={{ marginTop: 32 }}>
        <Text category="h6" style={{ textAlign: "center" }} appearance="hint">
          {t<string>("You are logged in as")}
        </Text>
        <Text category="h3" style={{ textAlign: "center", marginTop: 8 }}>
          {student.name}
        </Text>
      </Layout>
      <Layout style={{ padding: 16, width: "100%", marginTop: "auto" }}>
        <Button
          onPress={handleLogout}
          size="giant"
          style={{ width: "100%" }}
          accessoryLeft={(props) => <Icon {...props} name="log-out" />}
        >
          {t<string>("Logout")}
        </Button>
      </Layout>
    </MainLayout>
  );
};
