import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { Menu } from "./Menu";

const OPTIONS = [
  { text: "Option1", value: 0 },
  { text: "Option2", value: 1 },
  { text: "Option3", value: 2 },
];

const Layout = styled.div`
  display: flex;
  gap: 120px;
`;

storiesOf("Components", module).add("Menu", () => {
  return (
    <Layout>
      <Menu
        options={OPTIONS}
        isOpened
        onClose={() => null}
        onSelect={() => null}
      >
        <p>Anchor element</p>
      </Menu>
      <Menu options={[]} isOpened onClose={() => null} onSelect={() => null}>
        <p>Menu with empty text</p>
      </Menu>
    </Layout>
  );
});
