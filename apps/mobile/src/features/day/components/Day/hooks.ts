import { useHistory } from "react-router-native";

export const useDayComponent = () => {
  const history = useHistory();

  const handleForwardPress = () => {
    history.push("/profile");
  };

  return { operations: { handleForwardPress } };
};
