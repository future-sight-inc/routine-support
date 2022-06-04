import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { LanguageSelector } from "./LanguageSelector";

const Layout = styled.div`
  padding-top: 240px;
`;

storiesOf("Components", module).add("LanguageSelector", () => {
  return (
    <Layout>
      <LanguageSelector />
    </Layout>
  );
});
