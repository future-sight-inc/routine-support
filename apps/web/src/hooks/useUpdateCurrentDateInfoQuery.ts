import { DateInfo } from "@routine-support/domains";
import { useNavigate } from "react-router-dom";

import { updateCurrentDateInfoQuery } from "../utils/updateCurrentDateInfoQuery";

export const useUpdateCurrentDateInfoQuery = () => {
  const navigate = useNavigate();

  return (date: DateInfo) => updateCurrentDateInfoQuery(date, navigate);
};
