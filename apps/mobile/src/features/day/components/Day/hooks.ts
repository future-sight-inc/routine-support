import { useState } from "react";

import { DayActions } from "./Day";

export const useDayComponent = (actions: DayActions) => {
  const [isPinCodeInputVisible, setPinCodeVisible] = useState(false);

  const handleLogoutPress = () => {
    setPinCodeVisible(true);
  };

  const handlePinCodeSuccessInput = () => {
    setPinCodeVisible(false);
    actions.logout();
  };

  const handlePinCodeInputClose = () => {
    setPinCodeVisible(true);
  };

  return {
    models: { isPinCodeInputVisible },
    operations: {
      handleLogoutPress,
      handlePinCodeSuccessInput,
      handlePinCodeInputClose,
    },
  };
};
