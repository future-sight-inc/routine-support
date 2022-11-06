import { createCoachUseNotifications } from "@routine-support/domains";

import { coachNotificationAPI } from "../../../services/ApiService";

export const useNotifications = createCoachUseNotifications({
  notificationApi: coachNotificationAPI,
});
