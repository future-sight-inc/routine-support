import { ActivitySchema } from "@routine-support/domains";
import { createMockActivitySchema } from "@routine-support/domains";
import { MOCK_DATE_STRING } from "./constants";

export const createMockActivitySchemaFromTimePeriod = ({
  start,
  end,
}: {
  start: string;
  end: string;
}): ActivitySchema => {
  const activitySchema = createMockActivitySchema();

  return {
    ...activitySchema,
    date: MOCK_DATE_STRING,
    start,
    end,
  };
};
