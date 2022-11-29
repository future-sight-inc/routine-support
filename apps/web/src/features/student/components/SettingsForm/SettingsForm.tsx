import React from "react";

import { Student } from "@routine-support/domains";
import { useStudentSettingsForm } from "@routine-support/forms";
import { ClockTypePicker } from "apps/web/src/components/FormFields/ClockTypePicker";
import { LanguagePicker } from "apps/web/src/components/FormFields/LanguagePicker";
import { TextField } from "apps/web/src/components/FormFields/TextField";
import { useTranslation } from "react-i18next";

import { ErrorText } from "../../../../components/ErrorText";
import * as S from "./styled";

export interface SettingsFormActions {
  updateSettings: (student: Student) => Promise<void>;
  closeModal: () => void;
  getStudents: (config?: { silent: boolean }) => void;
}

interface SettingsFormProps {
  student: Partial<Student> | undefined;
  actions: SettingsFormActions;
}

export const SettingsForm: React.FC<SettingsFormProps> = ({ student, actions }) => {
  const {
    models: { control, isDirty, isSubmitting, submitError },
    operations: { onSubmit },
  } = useStudentSettingsForm(student, actions);

  const { t } = useTranslation();

  return (
    <form onSubmit={onSubmit}>
      <S.Wrapper>
        <S.Title>{t("App settings")}</S.Title>
        <S.LanguagePickerWrapper>
          <LanguagePicker name="language" control={control} label={t("Preferred language")} />
        </S.LanguagePickerWrapper>
        <ClockTypePicker name="clockType" control={control} label={t("Clock type")} />
        <S.PinCodeWrapper>
          <TextField name="pinCode" control={control} label={t("PIN code")} required />
        </S.PinCodeWrapper>
        <S.ButtonsWrapper>
          <S.SubmitButton type="submit" isLoading={isSubmitting} disabled={!isDirty}>
            {t("Update")}
          </S.SubmitButton>
        </S.ButtonsWrapper>
        {submitError && <ErrorText>{submitError}</ErrorText>}
      </S.Wrapper>
    </form>
  );
};
