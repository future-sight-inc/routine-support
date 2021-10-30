import { DateInfo } from "@routine-support/models";
import { useHistory } from "react-router-dom";
import { updateCurrentDateInfoQuery } from "utils/updateCurrentDateInfoQuery";

export const useUpdateCurrentDateInfoQuery = () => {
  const history = useHistory();

  return (date: DateInfo) => updateCurrentDateInfoQuery(date, history);
};
