import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LinkService } from "../../services/LinkService";
import { Login } from "./coach/Login";
import { Register } from "./coach/Register";
import { Day } from "./day/Day";
import { Notifications } from "./notifications/Notifications";
import { Students } from "./students/Students";

const Stack = createNativeStackNavigator();

export const CoachEntry: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={LinkService.coach.login()} component={Login} />
      <Stack.Screen name={LinkService.coach.register()} component={Register} />
      <Stack.Screen name={LinkService.coach.day()} component={Day} />
      <Stack.Screen name={LinkService.coach.students()} component={Students} />
      <Stack.Screen name={LinkService.coach.notifications()} component={Notifications} />
    </Stack.Navigator>
  );
};
