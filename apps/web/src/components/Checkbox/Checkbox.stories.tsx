import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { Checkbox } from "./Checkbox";

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 200px;
  padding-top: 40px;
`;

storiesOf("Components", module).add("Checkbox", () => (
  <FieldWrapper>
    <Checkbox label="Label" helperText="Helper text" onChange={() => null} />
  </FieldWrapper>
));
