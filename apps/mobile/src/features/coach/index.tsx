import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { LinkService } from "../../services/LinkService";
import { Login } from "./coach/Login";
import { Register } from "./coach/Register";
import { Day } from "./day/Day";
import { Notifications } from "./notifications/Notifications";
import { Students } from "./students/Students";

const Drawer = createDrawerNavigator();

export const CoachEntry: React.FC = () => {
  return (
    <Drawer.Navigator useLegacyImplementation={true} initialRouteName={LinkService.coach.login()}>
      <Drawer.Group screenOptions={{ headerShown: false, swipeEnabled: false }}>
        <Drawer.Screen name={LinkService.coach.login()} component={Login} />
        <Drawer.Screen name={LinkService.coach.register()} component={Register} />
      </Drawer.Group>
      <Drawer.Group>
        <Drawer.Screen name={LinkService.coach.day()} component={Day} />
        <Drawer.Screen name={LinkService.coach.students()} component={Students} />
        <Drawer.Screen name={LinkService.coach.notifications()} component={Notifications} />
      </Drawer.Group>
    </Drawer.Navigator>
  );
};
