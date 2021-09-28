import { YearNumber, WeekNumber } from 'features/week/types';
import React from 'react';
import { useWeekSelectComponent } from './useWeekSelectComponent';
import styles from './WeekSelect.module.scss';

export interface WeekSelectActions {
  getWeek: (year: YearNumber, week: WeekNumber) => void;
}

export interface WeekSelectProps {
  loading: boolean;
  actions: WeekSelectActions;
}

export const WeekSelect: React.FC<WeekSelectProps> = ({ actions, loading }) => {
  const { models, operations } = useWeekSelectComponent(actions);

  return (
    <form onSubmit={operations.handleSubmit} className={styles.root}>
      <button
        type="button"
        onClick={operations.handlePrevClick}
        disabled={loading}
      >
        Prev
      </button>
      <p>
        {models.dateRange.start} - {models.dateRange.end}
      </p>
      <button
        type="button"
        onClick={operations.handleNextClick}
        disabled={loading}
      >
        Next
      </button>
    </form>
  );
};
