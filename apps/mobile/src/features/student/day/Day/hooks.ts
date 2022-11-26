import { useState } from "react";

export const useDayComponent = () => {
  const [isPinCodeInputVisible, setPinCodeVisible] = useState(false);

  const handleLogoutPress = () => {
    setPinCodeVisible(true);
  };

  const handlePinCodeSuccessInput = async () => {
    // await actions.logout();
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
