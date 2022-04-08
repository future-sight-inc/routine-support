import { storiesOf } from "@storybook/react";

import { Layout } from "./Layout";

storiesOf("Components", module).add("Layout", () => (
  <Layout
    user={{ _id: "", email: "nikitadmitriev97@mail.ru", name: "Nikita" }}
    actions={{ logout: () => null }}
  />
));
