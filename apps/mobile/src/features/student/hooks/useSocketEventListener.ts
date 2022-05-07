import { useEffect } from "react";

import { useStudent } from "../useStudent";

export const useSocketEventListener = (
  eventType: string,
  listener: (data: unknown) => void
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
