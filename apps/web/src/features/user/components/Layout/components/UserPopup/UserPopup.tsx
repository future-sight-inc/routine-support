import React from "react";

import { Menu, MenuItem } from "@mui/material";
import { User } from "@routine-support/models";

import { useUserPopupComponent } from "./hooks";
import * as S from "./styled";

export interface UserPopupActions {
  logout: () => void;
}

interface UserPopupProps {
  user: User;
  actions: UserPopupActions;
}

export const UserPopup: React.FC<UserPopupProps> = ({ user, actions }) => {
  const {
    models: { anchorEl, open },
    operations: { handleOpen, handleClose, handleLogout },
  } = useUserPopupComponent(actions);

  return (
    <>
      <S.UserWrapper onClick={handleOpen}>
        <S.Email>{user.email}</S.Email>
        <S.UserIcon />
      </S.UserWrapper>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem>Профиль</MenuItem>
        <MenuItem onClick={handleLogout}>Выйти</MenuItem>
      </Menu>
    </>
  );
};
