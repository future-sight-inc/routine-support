import React from "react";

import { WeekSocketEventTypeEnum } from "@routine-support/domains";
import { Route, Routes } from "react-router-dom";

import { LoginForm } from "../features/coach/components/Forms/LoginForm";
import { RegisterForm } from "../features/coach/components/Forms/RegisterForm";
import { PrivateRoute } from "../features/coach/components/PrivateRoute";
import { useSocketEventListener } from "../features/coach/hooks/useSocketEventListener";
import { Notifications } from "../features/notifications/Notifications";
import { Students } from "../features/students/Students";
import { Week } from "../features/week";
import { useWeek } from "../features/week/useWeek";
import { ConfirmationProvider } from "../services/ConfirmationService";
import { LinkService } from "../services/LinkService";

export const App = () => {
  const {
    operations: { updateWeek },
  } = useWeek();

  useSocketEventListener(WeekSocketEventTypeEnum.UpdateCalendar, () => {
    updateWeek();
  });

  // useSocketEventListener(WeekSocketEventTypeEnum.UpdateNotifications, notify);

  return (
    <ConfirmationProvider>
      <Routes>
        <Route path={LinkService.login()} element={<LoginForm />} />
        <Route path={LinkService.register()} element={<RegisterForm />} />
        <Route
          path={LinkService.home()}
          element={
            <PrivateRoute>
              <Week />
            </PrivateRoute>
          }
        />
        <Route
          path={LinkService.students()}
          element={
            <PrivateRoute>
              <Students />
            </PrivateRoute>
          }
        />
        <Route
          path={LinkService.notifications()}
          element={
            <PrivateRoute>
              <Notifications />
            </PrivateRoute>
          }
        />
      </Routes>
    </ConfirmationProvider>
  );
};

export default App;
