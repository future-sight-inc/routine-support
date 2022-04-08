import React from "react";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";

import { NavigationLink } from "../NavigationLink";
import * as S from "./styled";

export const Header: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.UserWrapper>
          <PersonIcon />
          <S.UserEmail>
            nikitadmitriev97@mail.ru
          </S.UserEmail>
        </S.UserWrapper>
        <S.Navigation>
          <NavigationLink icon={<CalendarTodayIcon />}>Calendar</NavigationLink>
          <NavigationLink icon={<GroupIcon />}>Students</NavigationLink>
        </S.Navigation>
        <S.LogoutWrapper>
          <S.LogoutText>Logout</S.LogoutText>
          <LogoutIcon />
        </S.LogoutWrapper>
      </S.Content>
    </S.Wrapper>
  );
};
