import React from "react";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import { Coach } from "@routine-support/domains";
import moment from "moment";
import { useTranslation } from "react-i18next";

import { LinkService } from "../../services/LinkService";
import { Badge } from "../Badge";
import { NavigationLink } from "../NavigationLink";
import { HeaderLocators } from "./locators";
import * as S from "./styled";

interface HeaderProps {
  user: Coach;
  notViewedCount: number;
  onLogout: () => void;
  onProfileOpen: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  notViewedCount,
  onLogout,
  onProfileOpen,
}) => {
  const { t } = useTranslation();

  return (
    <S.Wrapper>
      <S.Content>
        <S.UserWrapper
          onClick={onProfileOpen}
          data-testid={HeaderLocators.OpenProfile}
        >
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
            to={LinkService.home()}
          >
            {t("Calendar")}
          </NavigationLink>
          <NavigationLink icon={<GroupIcon />} to={LinkService.students()}>
            {t("Students")}
          </NavigationLink>
          <NavigationLink
            icon={<NotificationsIcon />}
            to={LinkService.notifications()}
          >
            {t("Notifications")}
            <S.BadgeWrapper>
              {notViewedCount > 0 && (
                <Badge color="alert">
                  {notViewedCount >= 100 ? "99+" : notViewedCount}
                </Badge>
              )}
            </S.BadgeWrapper>
          </NavigationLink>
        </S.Navigation>
        <S.LogoutWrapper onClick={onLogout} data-testid={HeaderLocators.Logout}>
          <S.LogoutText>{t("Logout")}</S.LogoutText>
          <LogoutIcon />
        </S.LogoutWrapper>
      </S.Content>
    </S.Wrapper>
  );
};
