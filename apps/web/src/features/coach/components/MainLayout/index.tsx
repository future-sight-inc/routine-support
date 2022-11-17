import { ReactNode } from "react";

import { useNotifications } from "../../../notifications/useNotifications";
import { useCoach } from "../../useCoach";
import { MainLayout as UncontrolledMainLayout } from "./MainLayout";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const {
    models: { coach },
    operations: { logout, deleteCoach },
  } = useCoach();
  const {
    models: { notViewedCount },
  } = useNotifications();

  if (!coach) {
    return null;
  }

  return (
    <UncontrolledMainLayout
      user={coach}
      notViewedCount={notViewedCount}
      actions={{ deleteCoach, logout }}
    >
      {children}
    </UncontrolledMainLayout>
  );
};
