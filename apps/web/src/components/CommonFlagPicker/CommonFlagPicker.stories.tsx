import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { LabelWithHelper } from "../LabelWithHelper";
import { CommonFlagPicker } from "./CommonFlagPicker";

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 200px;
`;

storiesOf("Components", module).add("CommonFlagPicker", () => (
  <FieldWrapper>
    <LabelWithHelper>Activity type</LabelWithHelper>
    <CommonFlagPicker onChange={() => null} />
  </FieldWrapper>
));
