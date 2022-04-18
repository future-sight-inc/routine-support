import { boolean, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { Button } from "./Button";

const Layout = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

storiesOf("Style Kit/Button", module)
  .add("Variations", () => (
    <Layout>
      <Button variant="primary">Primary</Button>
      <Button variant="primary" disabled>
        Primary
      </Button>
      <Button variant="primary" isLoading>
        Primary
      </Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="secondary" isLoading>
        Secondary
      </Button>
    </Layout>
  ))
  .add("Customize", () => (
    <Layout>
      <Button
        variant={select("Variant", ["primary", "secondary"], "primary")}
        isLoading={boolean("Is loading", false)}
      >
        {text("Text", "Submit")}
      </Button>
    </Layout>
  ));
