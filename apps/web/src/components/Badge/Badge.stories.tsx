import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { Badge } from "./Badge";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 200px;
`;

storiesOf("Components", module).add("Badge", () => (
  <Layout>
    <Badge color="primary" textColor="white">
      New
    </Badge>
    <Badge color="primary" textColor="black">
      New
    </Badge>
    <Badge color="alert" textColor="white">
      New
    </Badge>
    <Badge color="alert" textColor="black">
      New
    </Badge>
  </Layout>
));
