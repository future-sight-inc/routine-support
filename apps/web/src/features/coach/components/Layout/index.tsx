import { useNotifications } from "../../../notifications/useNotifications";
import { useCoach } from "../../useCoach";
import { Layout as UncontrolledLayout } from "./Layout";

export const Layout: React.FC = ({ children }) => {
  const {
    models: { coach },
    operations: { logout },
  } = useCoach();
  const {
    models: { notViewedCount },
  } = useNotifications();

  if (!coach) {
    return null;
  }

  return (
    <UncontrolledLayout
      user={coach}
      notViewedCount={notViewedCount}
      actions={{ logout }}
    >
      {children}
    </UncontrolledLayout>
  );
};
