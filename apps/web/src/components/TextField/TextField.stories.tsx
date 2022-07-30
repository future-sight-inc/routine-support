import SearchIcon from "@mui/icons-material/Search";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { TextField } from "./TextField";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 200px;
`;

storiesOf("Components", module).add("TextField", () => (
  <Layout>
    <TextField placeholder="Place text here" />
    <TextField placeholder="Place password here" type="password" />
    <TextField placeholder="Empty with error" error />
    <TextField value="Filled with error" error />
    <TextField type="time" />
    <TextField type="date" />
    <TextField showBorder={false} placeholder="Border less" />
    <TextField icon={<SearchIcon />} placeholder="With icon" />
  </Layout>
));
