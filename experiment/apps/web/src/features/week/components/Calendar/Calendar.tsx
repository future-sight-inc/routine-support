import { Week } from 'features/week/types';
import React from 'react';
import styles from './Calendar.module.scss';
import { getActivitiesArray, getTimeRange } from './utils';

interface Props {
  loading: boolean;
  week: Week | null;
  actions: {};
}

export const Calendar: React.FC<Props> = ({ loading, week }) => {
  if (loading || !week) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.root}>
      <div className={styles.timeColumn}>
        <div className={styles.cell} />
        {getTimeRange(week).map((time) => (
          <div className={styles.cell}>{time}</div>
        ))}
      </div>
      {week?.days.map((day) => (
        <div>
          <div className={styles.cell}>{day.date}</div>
          {getActivitiesArray(week).map((activity) => (
            <div className={styles.cell}>{activity?.title || ''}</div>
          ))}
        </div>
      ))}
    </div>
  );
};
