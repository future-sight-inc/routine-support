import { useEffect } from "react";

import { useStudent } from "../useStudent";

export const useSocketEventListener = <T = unknown>(
  eventType: string,
  listener: (data: T) => void
) => {
  const {
    models: { student, socketConnection },
  } = useStudent();

  useEffect(() => {
    if (student && socketConnection) {
      socketConnection.on(eventType, listener);
    }
  }, [student, socketConnection]);
};
