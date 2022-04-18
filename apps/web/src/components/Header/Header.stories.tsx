import { storiesOf } from "@storybook/react";

import { Header } from "./Header";

storiesOf("Components", module).add("Header", () => (
  <Header
    user={{ _id: "", email: "nikitadmitriev97@mail.ru", name: "Nikita" }}
    onLogout={() => null}
  />
));
