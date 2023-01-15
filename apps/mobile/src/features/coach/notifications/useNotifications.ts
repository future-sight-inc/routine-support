import { createCoachUseNotifications } from "@routine-support/domains";
import { useAppSelector } from "apps/mobile/src/app/store";

import { coachNotificationAPI } from "../../../services/ApiService";

const useStoreState = () => {
  const state = useAppSelector((state) => state);

  return {
    coachAuth: state.coachAuth,
    coachNotifications: state.coachNotifications,
  };
};

export const useNotifications = createCoachUseNotifications({
  notificationApi: coachNotificationAPI,
  useStoreState,
});
