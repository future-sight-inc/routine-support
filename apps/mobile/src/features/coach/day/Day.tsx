import React from "react";

import { Button } from "apps/mobile/src/components/Button";
import { Text } from "react-native";

import { MainLayout } from "../coach/MainLayout";

export const Day: React.FC = () => {
  return (
    <MainLayout title="Calendar" footer={<Button text="Activity" icon="add" fullWidth />}>
      <Text>Her will be day screen</Text>
    </MainLayout>
  );
};
