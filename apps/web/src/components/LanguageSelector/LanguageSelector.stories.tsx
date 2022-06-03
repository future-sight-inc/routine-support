import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { LanguageSelector } from "./LanguageSelector";

const Layout = styled.div``;

storiesOf("Components", module).add("LanguageSelector", () => {
  return (
    <Layout>
      <LanguageSelector />
    </Layout>
  );
});
