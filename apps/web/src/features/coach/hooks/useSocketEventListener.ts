import { useEffect } from "react";

import { useCoach } from "../useCoach";

export const useSocketEventListener = (
  eventType: string,
  listener: (data: unknown) => void
) => {
  const {
    models: { coach, socketConnection },
  } = useCoach();

  useEffect(() => {
    if (coach && socketConnection) {
      socketConnection.on(eventType, listener);
    }
  }, [coach, socketConnection]);
};
