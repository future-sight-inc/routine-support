import React, { ReactNode } from "react";

import { StyleSheet } from "react-native";

import { MainLayout } from "../../../coach/MainLayout";

interface StudentsLayoutProps {
  addButton: ReactNode;
  studentsList: ReactNode;
  loading: boolean;
}

export const StudentsLayout: React.FC<StudentsLayoutProps> = ({
  addButton,
  studentsList,
  loading,
}) => {
  return (
    <MainLayout title="Students" footer={addButton} bodyStyle={styles.body} loading={loading}>
      {studentsList}
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 0,
    paddingTop: 0,
  },
});
