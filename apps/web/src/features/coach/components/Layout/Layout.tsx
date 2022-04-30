import React from "react";

import { Coach, WeekSocketEventTypeEnum } from "@routine-support/domains";
import { Footer } from "apps/web/src/components/Footer";
import { Header } from "apps/web/src/components/Header";

import { useNotifications } from "../../../notifications/useNotifications";
import { useWeek } from "../../../week/useWeek";
import { useSocketEventListener } from "../../hooks/useSocketEventListener";
import * as S from "./styled";
import { useLayoutComponent } from "./useLayoutComponent";

export interface LayoutActions {
  logout: () => void;
}

interface LayoutProps {
  user: Coach;
  notViewedCount: number;
  actions: LayoutActions;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  user,
  notViewedCount,
  actions,
}) => {
  const {
    operations: { handleLogout },
  } = useLayoutComponent(actions);

  // todo Перенести в более подходящее место - прослойка под приватным роутером

  const Week = useWeek();
  const Notifications = useNotifications();

  useSocketEventListener(WeekSocketEventTypeEnum.UpdateCalendar, () => {
    Week.operations.getWeek({ config: { silent: true } });
  });

  useSocketEventListener(WeekSocketEventTypeEnum.UpdateNotifications, () => {
    Notifications.operations.getNotifications({ config: { silent: true } });
  });

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <Header
          user={user}
          notViewedCount={notViewedCount}
          onLogout={handleLogout}
        />
      </S.HeaderWrapper>
      <S.Content>{children}</S.Content>
      <S.FooterWrapper>
        <Footer />
      </S.FooterWrapper>
    </S.Wrapper>
  );
};
