import React from "react";
import { AppWrapper } from "../src/components/AppWrapper";

export const decorators = [
  (Story) => (
    <AppWrapper>
      <Story />
    </AppWrapper>
  ),
];
