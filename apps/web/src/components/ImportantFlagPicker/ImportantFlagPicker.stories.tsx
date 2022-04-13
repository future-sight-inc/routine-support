import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { ImportantFlagPicker } from "./ImportantFlagPicker";

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 360px;
  padding-top: 40px;
`;

storiesOf("Components", module).add("ImportantFlagPicker", () => (
  <FieldWrapper>
    <ImportantFlagPicker onChange={() => null} />
  </FieldWrapper>
));
