import { ActivitiesGroup } from "@routine-support/domains";
import { getTimelineMargin } from "apps/mobile/src/utils/getTimelineMargin";
import { getMinutes } from "date-fns";

export const getActivitiesGroupTopOffset = ({
  group,
  rowHeight,
  rowIndex,
}: {
  group: ActivitiesGroup;
  rowHeight: number;
  rowIndex: number;
}) => {
  return (
    rowHeight * (rowIndex + getMinutes(group.start) / 60) +
    rowIndex +
    getTimelineMargin(group.start)
  );
};
