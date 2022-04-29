import React from "react";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import { Coach } from "@routine-support/domains";
import moment from "moment";
import { useTranslation } from "react-i18next";

import { Badge } from "../Badge";
import { NavigationLink } from "../NavigationLink";
import * as S from "./styled";

interface HeaderProps {
  user: Coach;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  const { t } = useTranslation();

  return (
    <S.Wrapper>
      <S.Content>
        <S.UserWrapper>
          <PersonIcon />
          <S.UserEmail>{user.email}</S.UserEmail>
        </S.UserWrapper>
        <S.Navigation>
          <NavigationLink
            icon={
              <S.IconWrapper>
                <S.CurrentDay>{moment().format("D")}</S.CurrentDay>
                <CalendarTodayIcon />
              </S.IconWrapper>
            }
            to={"/"}
          >
            {t("Calendar")}
          </NavigationLink>
          <NavigationLink icon={<GroupIcon />} to={"/students"}>
            {t("Students")}
          </NavigationLink>
          <NavigationLink icon={<NotificationsIcon />} to={"/notifications"}>
            {t("Notifications")}
            <S.BadgeWrapper>
              <Badge color="alert">99</Badge>
            </S.BadgeWrapper>
          </NavigationLink>
        </S.Navigation>
        <S.LogoutWrapper onClick={onLogout}>
          <S.LogoutText>{t("Logout")}</S.LogoutText>
          <LogoutIcon />
        </S.LogoutWrapper>
      </S.Content>
    </S.Wrapper>
  );
};
