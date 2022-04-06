import { Moment } from "moment";

export const isTimeCrossed = (
  time1: { start: Moment; end: Moment },
  time2: { start: Moment; end: Moment }
): boolean => {
  const isTime1StartInTime2Period =
    time2.start <= time1.start && time1.start < time2.end;
  const isTime1EndInTime2Period =
    time2.start < time1.end && time1.end <= time2.end;

  const isTime2StartInTime1Period =
    time1.start <= time2.start && time2.start < time1.end;
  const isTime2EndInTime1Period =
    time1.start < time2.end && time2.end <= time1.end;

  return (
    isTime1StartInTime2Period ||
    isTime1EndInTime2Period ||
    isTime2StartInTime1Period ||
    isTime2EndInTime1Period
  );
};
