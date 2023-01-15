import { ActivitiesGroup } from "@routine-support/domains";
import { getTimelineMargin } from "apps/mobile/src/utils/getTimelineMargin";

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
    rowHeight * (rowIndex + group.start.get("minutes") / 60) +
    rowIndex +
    getTimelineMargin(group.start)
  );
};
