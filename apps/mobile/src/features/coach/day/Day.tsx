import React from "react";

import { Button } from "apps/mobile/src/components/Button";

import { MainLayout } from "../coach/MainLayout";
import { Calendar } from "./components/Calendar";
import { DayLayout } from "./components/DayLayout";
import { DaySelect } from "./components/DaySelect";
import { Filter } from "./components/Filter";

export const Day: React.FC = () => {
  return (
    <MainLayout title="Calendar" footer={<Button text="Activity" icon="add" fullWidth />}>
      <DayLayout daySelect={<DaySelect />} filter={<Filter />} calendar={<Calendar />} />
    </MainLayout>
  );
};
