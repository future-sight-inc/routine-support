import { ActivityFilterQuery } from "@routine-support/domains";

export const createMockFilter = ({
  students = [],
  isCommon = false,
}: {
  students?: string[];
  isCommon?: boolean;
}): ActivityFilterQuery => {
  let activityFilterQuery: ActivityFilterQuery = [];

  activityFilterQuery = activityFilterQuery.concat(students);

  if (isCommon) {
    activityFilterQuery.push("common");
  }

  return activityFilterQuery;
};
