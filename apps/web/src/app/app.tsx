import React from "react";

import Notifications from "@mui/icons-material/Notifications";
import AdapterMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { WeekSocketEventTypeEnum } from "@routine-support/domains";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";

import { LoginForm } from "../features/coach/components/Forms/LoginForm";
import { RegisterForm } from "../features/coach/components/Forms/RegisterForm";
import { PrivateRoute } from "../features/coach/components/PrivateRoute";
import { useSocketEventListener } from "../features/coach/hooks/useSocketEventListener";
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
    </LocalizationProvider>
  );
};

export default App;
