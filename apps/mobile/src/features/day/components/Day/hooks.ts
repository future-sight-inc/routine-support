import { useState } from "react";

import { DayActions } from "./Day";

export const useDayComponent = (actions: DayActions) => {
  const [isPinCodeInputVisible, setPinCodeVisible] = useState(false);

  const handleLogoutPress = () => {
    setPinCodeVisible(true);
  };

  const handlePinCodeSuccessInput = async () => {
    await actions.logout();
    setPinCodeVisible(false);
  };

  const handlePinCodeInputClose = () => {
    setPinCodeVisible(false);
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
