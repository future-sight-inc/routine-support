import React from "react";

import { Button } from "apps/mobile/src/components/Button";

import { MainLayout } from "../coach/MainLayout";
import { Calendar } from "./components/Calendar";
import { DayLayout } from "./components/DayLayout";
import { DaySelect } from "./components/DaySelect";
import { Filter } from "./components/Filter";

const TIME_RANGE = [
  "1:00",
  "2:00",
  "3:00",
  "4:00",
  "5:00",
  "6:00",
  "7:00",
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];

export const Day: React.FC = () => {
  // const {
  //   models: { day },
  // } = useDay();

  // if (!day) {
  //   return <Typography>Fuck</Typography>;
  // }

  return (
    <MainLayout title="Calendar" footer={<Button text="Activity" icon="add" fullWidth />}>
      <DayLayout
        daySelect={<DaySelect />}
        filter={<Filter />}
        calendar={
          <Calendar
            activities={[]}
            students={[]}
            timeRange={TIME_RANGE}
            onActivityPress={() => null}
            onConfirmationStatusPress={() => null}
          />
        }
      />
    </MainLayout>
  );
};
