import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { LabelWithHelper } from "../LabelWithHelper";
import { ClockTypePicker } from "./ClockTypePicker";

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 200px;
`;

storiesOf("Components", module).add("ClockTypePicker", () => (
  <FieldWrapper>
    <LabelWithHelper>Clock type</LabelWithHelper>
    <ClockTypePicker onChange={() => null} />
  </FieldWrapper>
));
