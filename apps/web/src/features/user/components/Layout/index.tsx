import { useUser } from "../../useUser";
import { Layout as UncontrolledLayout } from "./Layout";

export const Layout: React.FC = ({ children }) => {
  const {
    models: { user },
    operations: { logout },
  } = useUser();

  if (!user) {
    return null;
  }

  return (
    <UncontrolledLayout user={user} actions={{ logout }}>
      {children}
    </UncontrolledLayout>
  );
};
