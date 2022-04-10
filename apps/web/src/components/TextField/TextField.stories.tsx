import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { TextField } from "./TextField";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

storiesOf("Components", module).add("TextField", () => (
  <Layout>
    <TextField placeholder="Place text here" />
    <TextField placeholder="Place password here" type="password" />
    <TextField placeholder="Empty with error" error />
    <TextField value="Filled with error" error />
  </Layout>
));
