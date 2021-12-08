import { useHistory } from "react-router-native";

export const useScheduleComponent = () => {
  const history = useHistory();

  const handleActivityOpen = () => {
    history.push("/day");
  };

  const handleForwardPress = () => {
    history.push("/profile");
  };

  return { operations: { handleActivityOpen, handleForwardPress } };
};
