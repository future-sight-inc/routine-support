import { createCoachUseCoach } from "@routine-support/domains";
import { useAppSelector } from "apps/mobile/src/app/store";

import { coachAuthAPI } from "../../../services/ApiService";

const useStoreState = () => {
  const state = useAppSelector((state) => state);

  return {
    coachAuth: state.coachAuth,
  };
};

export const useCoach = createCoachUseCoach({ coachApi: coachAuthAPI, useStoreState });
