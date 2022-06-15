import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { Footer } from "./Footer";

const Layout = styled.div`
  padding-top: 240px;
`;

storiesOf("Components", module).add("Footer", () => (
  <Layout>
    <Footer />
  </Layout>
));
