import React from 'react';

import { Calendar } from './components/Calendar';
import { WeekSelect } from './components/WeekSelect';

import { useWeek } from './hooks/useWeek';

export const Week: React.FC = () => {
  const {
    models: { week, loading },
    operations: { getWeek },
  } = useWeek();

  // ! Все операции должны передаваться в компоненты через пропсы
  return (
    <div>
      <WeekSelect loading={loading} actions={{ getWeek }} />
      <Calendar week={week} loading={loading} actions={{}} />
    </div>
  );
};
