import { useHistory } from "react-router-native";

export const useDayComponent = () => {
  const history = useHistory();

  const handleForwardPress = () => {
    history.push("/profile");
  };

  const handleBackPress = () => {
    history.push("/");
  };

  return { operations: { handleBackPress, handleForwardPress } };
};
