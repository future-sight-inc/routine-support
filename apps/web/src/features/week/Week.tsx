import { useActivity } from "features/activity/hooks/useActivity";
import React from "react";

import { WeekCalendar } from "./components/WeekCalendar";
import { WeekLayout } from "./components/WeekLayout";
import { WeekRange } from "./components/WeekRange";
import { WeekSelect } from "./components/WeekSelect";

import { useWeek } from "./hooks/useWeek";

export const Week: React.FC = () => {
  const {
    models: { week, loading },
    operations: { getWeek },
  } = useWeek();
  const { operations: openNewActivityModal } = useActivity();

  // ! Все операции должны передаваться в компоненты через пропсы
  return (
    <WeekLayout
      weekSelect={<WeekSelect loading={loading} actions={{ getWeek }} />}
      weekRange={<WeekRange week={week} />}
      calendar={
        <WeekCalendar
          week={week}
          loading={loading}
          actions={{ openNewActivityModal }}
        />
      }
    />
  );
};
