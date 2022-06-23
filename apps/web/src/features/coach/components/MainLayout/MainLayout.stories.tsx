import { storiesOf } from "@storybook/react";

import { MainLayout } from "./MainLayout";

storiesOf("Coach", module).add("MainLayout", () => (
  <MainLayout
    user={{ _id: "", email: "nikitadmitriev97@mail.ru", name: "Nikita" }}
    notViewedCount={100}
    actions={{ deleteCoach: () => null, logout: () => null }}
  >
    {null}
  </MainLayout>
));
