import { useState, MouseEvent } from "react";

import { UserPopupActions } from "./UserPopup";

export const useUserPopupComponent = (actions: UserPopupActions) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (evt: MouseEvent<HTMLElement>) => {
    setAnchorEl(evt.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    if (window.confirm("Вы уверены, что хотите выйти?")) {
      handleClose();
      actions.logout();
    }
  };

  return {
    models: { open, anchorEl },
    operations: { handleOpen, handleClose, handleLogout },
  };
};
