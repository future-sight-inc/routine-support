import React, { ReactNode } from "react";

import { StyleProp, ViewStyle } from "react-native";

import { useStudent } from "../useStudent";
import { useMainLayoutComponent } from "./hooks";
import { MainLayout as UncontrolledMainLayout } from "./MainLayout";

export interface MainLayoutActions {
  logout: () => void;
}

interface MainLayoutProps {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  bodyStyle?: StyleProp<ViewStyle>;
  loading?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  title,
  children,
  footer,
  bodyStyle,
  loading,
}) => {
  const {
    models: { student },
    operations: { logout },
  } = useStudent();
  const {
    operations: { handleMenuIconPress },
  } = useMainLayoutComponent({ logout }, student);

  return (
    <UncontrolledMainLayout
      title={title}
      footer={footer}
      bodyStyle={bodyStyle}
      loading={loading || !student}
      onMenuIconPress={handleMenuIconPress}
    >
      {children}
    </UncontrolledMainLayout>
  );
};
