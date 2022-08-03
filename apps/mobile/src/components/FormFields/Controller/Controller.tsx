import React, { ReactElement } from "react";

import {
  ControllerFieldState,
  ControllerRenderProps,
  Controller as FormController,
  UseFormStateReturn,
} from "react-hook-form";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";

import { Typography } from "../../Typography";
import { FormFieldProps } from "../types";

export interface ControllerProps extends FormFieldProps {
  render: (arg: {
    field: ControllerRenderProps;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<unknown>;
  }) => ReactElement;
  row?: boolean;
}

export const Controller: React.FC<ControllerProps> = ({
  name,
  control,
  render,
  label,
  required,
}) => {
  const { t } = useTranslation();

  return (
    <FormController
      name={name}
      control={control}
      rules={{ required: required && t<string>("Required field") }}
      render={({ field, fieldState, formState }) => (
        <View style={styles.wrapper}>
          {label && (
            <Typography variant="text2" color="secondary" style={styles.label}>
              {label}
            </Typography>
          )}
          {render({ field, fieldState, formState })}
          {fieldState.error?.message && (
            <Typography variant="text2" color="error" style={styles.error}>
              {t(fieldState.error.message)}
            </Typography>
          )}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
  },
  label: {
    marginBottom: 4,
  },
  error: {
    marginTop: -12,
    marginBottom: 8,
  },
});
