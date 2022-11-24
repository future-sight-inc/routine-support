import React, { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";

import { AppWrapper } from "../components/AppWrapper";
import { CoachEntry } from "../features/coach";
import { LinkService } from "../services/LinkService";

const App = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate(LinkService.coach.login(), {});
  }, []);

  return <CoachEntry />;
};

export default () => (
  <AppWrapper>
    <App />
  </AppWrapper>
);
