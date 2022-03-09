import React from "react";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GroupIcon from '@mui/icons-material/Group';
import { List, ListItemButton, ListItemText } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { User } from "@routine-support/domains";
import { Footer } from "apps/web/src/components/Footer";
import { LinkService } from "apps/web/src/services/LinkService";
import moment from "moment";
import { useTranslation } from "react-i18next";
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

  const { t } = useTranslation();

  return (
    <S.Wrapper>
      <S.Sidebar>
        <S.Header>
          <S.UserWrapper>
            <S.UserIcon />
            <S.Name>{user.name}</S.Name>
          </S.UserWrapper>
        </S.Header>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              exact
              to={LinkService.home()}
              activeClassName="active"
            >
              <S.HomeItemIcon>
                <CalendarTodayIcon />
                <S.DayNumber>{moment().date()}</S.DayNumber>
              </S.HomeItemIcon>
              <ListItemText primary={t("Calendar")} />
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
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary={t("Students")} />
            </ListItemButton>
          </ListItem>
        </List>
        <S.LogoutButton onClick={handleLogout}>{t("Logout")}</S.LogoutButton>
      </S.Sidebar>
      <S.Content>{children}</S.Content>
      <S.FooterWrapper>
        <Footer />
      </S.FooterWrapper>
    </S.Wrapper>
  );
};
