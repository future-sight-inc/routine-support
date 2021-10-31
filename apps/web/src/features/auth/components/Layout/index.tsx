import { useAuth } from "../../useAuth";
import { Layout as UncontrolledLayout } from "./Layout";

export const Layout: React.FC = ({ children }) => {
  const {
    models: { user },
    operations: { logout },
  } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <UncontrolledLayout user={user} actions={{ logout }}>
      {children}
    </UncontrolledLayout>
  );
};
