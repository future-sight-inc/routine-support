import { useCoach } from "../../useCoach";
import { Layout as UncontrolledLayout } from "./Layout";

export const Layout: React.FC = ({ children }) => {
  const {
    models: { coach },
    operations: { logout },
  } = useCoach();

  if (!coach) {
    return null;
  }

  return (
    <UncontrolledLayout user={coach} actions={{ logout }}>
      {children}
    </UncontrolledLayout>
  );
};
