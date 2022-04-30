import { Activity, RepeatTypeEnum } from "@routine-support/domains";

export const getActivityImportanceValue = (activity: Activity): number => {
  let importanceValue = 0;

  if (activity.isImportant) {
    return 50;
  }

  switch (activity.repeatType) {
    case RepeatTypeEnum.None: {
      importanceValue = 40;
      break;
    }
    case RepeatTypeEnum.EveryYear: {
      importanceValue = 30;
      break;
    }
    case RepeatTypeEnum.EveryMonth: {
      importanceValue = 20;
      break;
    }
    case RepeatTypeEnum.EveryWeek: {
      importanceValue = 10;
      break;
    }
    case RepeatTypeEnum.EveryDay: {
      importanceValue = 0;
      break;
    }
  }

  const isIndividualActivity = !activity.isCommon;
  const isGroupActivity = activity?.students.length >= 2;

  if (isIndividualActivity) {
    importanceValue++;

    if (!isGroupActivity) {
      importanceValue++;
    }
  }

  return importanceValue;
};
