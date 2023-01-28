export enum RepeatTypeEnum {
  None,
  EveryDay,
  EveryWeek,
  EveryMonth,
  EveryYear,
}

export type Activity = {
  _id: string;
  coachId: string;
  name: string;
  pictogram: string;
  date: Date;
  start: Date;
  end: Date;
  repeatType: RepeatTypeEnum;
  isCommon: boolean;
  isImportant: boolean;
  students: string[];
  confirmation: ConfirmationInfo;
};

export type ConfirmationInfo = {
  [key in string]: {
    students: string[];
    isNotified: boolean;
  };
};

export interface ActivitiesGroup {
  start: Date;
  end: Date;
  activities: Activity[];
}
