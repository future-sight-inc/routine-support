import { useNotifications } from "../../../notifications/useNotifications";
import { useCoach } from "../../useCoach";
import { MainLayout as UncontrolledMainLayout } from "./MainLayout";

export const MainLayout: React.FC = ({ children }) => {
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
