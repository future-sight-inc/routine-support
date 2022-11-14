import React from "react";

import AdapterMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { WeekSocketEventTypeEnum } from "@routine-support/domains";
import { useTranslation } from "react-i18next";
import { Route } from "react-router-dom";

import { LoginForm } from "../features/coach/components/Forms/LoginForm";
import { RegisterForm } from "../features/coach/components/Forms/RegisterForm";
import { MainLayout } from "../features/coach/components/MainLayout";
import { PrivateRoute } from "../features/coach/components/PrivateRoute";
import { useSocketEventListener } from "../features/coach/hooks/useSocketEventListener";
import { Notifications } from "../features/notifications/Notifications";
import { Students } from "../features/students/Students";
import { Week } from "../features/week";
import { useWeek } from "../features/week/useWeek";
import { ConfirmationProvider } from "../services/ConfirmationService";
import { LinkService } from "../services/LinkService";

export const App = () => {
  const { i18n } = useTranslation();

  const {
    operations: { updateWeek },
  } = useWeek();

  useSocketEventListener(WeekSocketEventTypeEnum.UpdateCalendar, () => {
    updateWeek();
  });

  // useSocketEventListener(WeekSocketEventTypeEnum.UpdateNotifications, notify);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment} locale={i18n.language}>
      <ConfirmationProvider>
        <Route path={LinkService.login()}>
          <LoginForm />
        </Route>
        <Route path={LinkService.register()}>
          <RegisterForm />
        </Route>
        <PrivateRoute>
          <MainLayout>
            <Route exact path={LinkService.home()}>
              <Week />
            </Route>
            <Route exact path={LinkService.students()}>
              <Students />
            </Route>
            <Route exact path={LinkService.notifications()}>
              <Notifications />
            </Route>
          </MainLayout>
        </PrivateRoute>
      </ConfirmationProvider>
    </LocalizationProvider>
  );
};

export default App;
