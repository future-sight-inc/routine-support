import { useEffect } from "react";

import { useCoach } from "../useCoach";

export const useSocketEventListener = (
  eventType: string,
  listener: (data: unknown) => void
) => {
  const {
    models: { socketConnection },
  } = useCoach();

  useEffect(() => {
    if (socketConnection) {
      socketConnection.on(eventType, listener);
    }
  }, [socketConnection]);
};
