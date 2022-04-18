import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { LabelWithHelper } from "../LabelWithHelper";
import { ColorPicker } from "./ColorPicker";

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 200px;
`;

storiesOf("Components", module).add("ColorPicker", () => (
  <FieldWrapper>
    <LabelWithHelper>Clock type</LabelWithHelper>
    <ColorPicker onChange={() => null} />
  </FieldWrapper>
));
