import React from 'react';

import { useWeek } from './hooks/useWeek';

export const Week: React.FC = () => {
  const {
    models: { week },
  } = useWeek();

  if (!week) {
    return <p>no week yet</p>;
  }

  return <p>Here will be a week</p>;
};
