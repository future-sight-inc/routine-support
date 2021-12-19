import React from "react";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ListIcon from "@mui/icons-material/List";
import { List, ListItemButton, ListItemText } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { User } from "@routine-support/domains";
import { LinkService } from "apps/web/src/services/LinkService";
import { NavLink } from "react-router-dom";

import * as S from "./styled";
import { useLayoutComponent } from "./useLayoutComponent";

export interface LayoutActions {
  logout: () => void;
}

interface LayoutProps {
  user: User;
  actions: LayoutActions;
}

export const Layout: React.FC<LayoutProps> = ({ children, user, actions }) => {
  const {
    operations: { handleLogout },
  } = useLayoutComponent(actions);

  return (
    <S.Wrapper>
      <S.Header>
        <S.UserWrapper>
          <S.UserIcon />
          <S.Name>{user.name}</S.Name>
        </S.UserWrapper>
      </S.Header>
      <S.Sidebar>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              exact
              to={LinkService.home()}
              activeClassName="active"
            >
              <ListItemIcon>
                <CalendarTodayIcon />
              </ListItemIcon>
              <ListItemText primary="Календарь" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              exact
              to={LinkService.students()}
              activeClassName="active"
            >
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="Студенты" />
            </ListItemButton>
          </ListItem>
        </List>
        <S.LogoutButton onClick={handleLogout}>Выйти</S.LogoutButton>
      </S.Sidebar>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
};
