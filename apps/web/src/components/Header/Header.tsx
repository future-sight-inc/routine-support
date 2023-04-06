import React from "react";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import { Coach } from "@routine-support/domains";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";

import { LinkService } from "../../services/LinkService";
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
        <S.UserWrapper onClick={onProfileOpen} data-testid={HeaderLocators.OpenProfile}>
          <PersonIcon />
          <S.UserEmail>{user.email}</S.UserEmail>
        </S.UserWrapper>
        <S.Navigation>
          <NavigationLink
            icon={
              <S.IconWrapper>
                <S.CurrentDay>{format(new Date(), "d")}</S.CurrentDay>
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
            icon={
              <S.NotificationsIconWrapper>
                <NotificationsIcon />
                {notViewedCount > 0 && <S.NewNotificationMark />}
              </S.NotificationsIconWrapper>
            }
            to={LinkService.notifications()}
          >
            {t("Notifications")}
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
