import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { AppWrapper } from "../components/AppWrapper";
import { Login as CoachLogin } from "../features/coach/coach/Login";
import { Register as CoachRegister } from "../features/coach/coach/Register";
import { Day as CoachDay } from "../features/coach/day/Day";
import { Notifications as CoachNotifications } from "../features/coach/notifications/Notifications";
import { Students as CoachStudents } from "../features/coach/students/Students";
import { Day as StudentDay } from "../features/student/day/Day";
import { Login as StudentLogin } from "../features/student/student/Login";
import { LinkService } from "../services/LinkService";

const Drawer = createDrawerNavigator();

export const App = () => {
  return (
    <AppWrapper>
      <Drawer.Navigator useLegacyImplementation={true} initialRouteName={LinkService.coach.login()}>
        <Drawer.Group screenOptions={{ headerShown: false, swipeEnabled: false }}>
          <Drawer.Screen name={LinkService.coach.login()} component={CoachLogin} />
          <Drawer.Screen name={LinkService.coach.register()} component={CoachRegister} />
        </Drawer.Group>
        <Drawer.Group>
          <Drawer.Screen name={LinkService.coach.day()} component={CoachDay} />
          <Drawer.Screen name={LinkService.coach.students()} component={CoachStudents} />
          <Drawer.Screen name={LinkService.coach.notifications()} component={CoachNotifications} />
        </Drawer.Group>
        <Drawer.Group screenOptions={{ headerShown: false, swipeEnabled: false }}>
          <Drawer.Screen name={LinkService.student.login()} component={StudentLogin} />
        </Drawer.Group>
        <Drawer.Screen name={LinkService.student.day()} component={StudentDay} />
      </Drawer.Navigator>
    </AppWrapper>
  );
};
