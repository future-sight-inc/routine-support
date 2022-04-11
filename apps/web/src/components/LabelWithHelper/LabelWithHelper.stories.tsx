import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { TextField } from "../TextField";
import { LabelWithHelper } from "./LabelWithHelper";

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 200px;
  padding-top: 64px;
`;

storiesOf("Components/LabelWithHelper", module)
  .add("Without helper text", () => (
    <FieldWrapper>
      <LabelWithHelper>Text</LabelWithHelper>
      <TextField />
    </FieldWrapper>
  ))
  .add("With helper text", () => (
    <FieldWrapper>
      <LabelWithHelper helperText="Helper text">Text</LabelWithHelper>
      <TextField />
    </FieldWrapper>
  ));
