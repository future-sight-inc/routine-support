import { Activity, RepeatTypeEnum } from "@routine-support/domains";

export const getActivityImportanceValue = (activity: Activity): number => {
  let importanceValue = 0;

  if (activity.isImportant) {
    return 64;
  }

  switch (activity.repeatType) {
    case RepeatTypeEnum.None: {
      importanceValue = 31;
      break;
    }
    case RepeatTypeEnum.EveryYear: {
      importanceValue = 15;
      break;
    }
    case RepeatTypeEnum.EveryMonth: {
      importanceValue = 7;
      break;
    }
    case RepeatTypeEnum.EveryWeek: {
      importanceValue = 3;
      break;
    }
    case RepeatTypeEnum.EveryDay: {
      importanceValue = 1;
      break;
    }
  }

  if (!activity.isCommon) {
    importanceValue *= 2;
  }

  return importanceValue;
};
