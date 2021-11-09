import { LayoutActions } from "./Layout";

export const useLayoutComponent = (actions: LayoutActions) => {
  const handleLogout = () => {
    if (window.confirm("Вы уверены, что хотите выйти?")) {
      actions.logout();
    }
  };

  return { operations: { handleLogout } };
};
