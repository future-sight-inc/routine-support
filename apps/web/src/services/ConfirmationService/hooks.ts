import { useContext } from "react";

import { ConfirmationContext } from "./ConfirmationProvider";

export const useConfirm = () => {
  const { confirm } = useContext(ConfirmationContext);

  return { confirm };
};
