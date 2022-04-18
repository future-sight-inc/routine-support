import React from "react";

import { RepeatTypeEnum } from "@routine-support/domains";
import { useTranslation } from "react-i18next";

import { Select, SelectProps } from "../Select";

export const RepeatTypePicker: React.FC<SelectProps> = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <Select
      {...props}
      defaultValue={RepeatTypeEnum.None}
      options={[
        { text: t("Never"), value: RepeatTypeEnum.None },
        { text: t("Every day"), value: RepeatTypeEnum.EveryDay },
        { text: t("Every week"), value: RepeatTypeEnum.EveryWeek },
        { text: t("Every month"), value: RepeatTypeEnum.EveryMonth },
        { text: t("Every year"), value: RepeatTypeEnum.EveryYear },
      ]}
    />
  );
};
