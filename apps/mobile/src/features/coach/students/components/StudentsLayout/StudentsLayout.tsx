import React, { ReactNode } from "react";

import { StyleSheet } from "react-native";

import { MainLayout } from "../../../coach/MainLayout";

interface StudentsLayoutProps {
  addButton: ReactNode;
  studentsList: ReactNode;
}

export const StudentsLayout: React.FC<StudentsLayoutProps> = ({ addButton, studentsList }) => {
  return (
    <MainLayout title="Students" footer={addButton} bodyStyle={styles.body}>
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
