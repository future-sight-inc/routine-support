import { PICTOGRAMS } from "@routine-support/pictograms";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { LabelWithHelper } from "../LabelWithHelper";
import { PictogramPicker } from "./PictogramPicker";

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 368px;
`;

storiesOf("Components", module).add("PictogramPicker", () => (
  <FieldWrapper>
    <LabelWithHelper>Pictogram</LabelWithHelper>
    <PictogramPicker onChange={() => null} pictograms={PICTOGRAMS} />
  </FieldWrapper>
));
