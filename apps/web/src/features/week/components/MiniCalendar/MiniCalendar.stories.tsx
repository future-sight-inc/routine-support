import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { MiniCalendar } from "./MiniCalendar";

const Layout = styled.div`
  width: 180px;
`;

storiesOf("Week", module).add("MiniCalendar", () => {
  return (
    <Layout>
      <MiniCalendar
        currentDate={new Date()}
        // eslint-disable-next-line
        onWeekSelect={(week) => console.log(week)}
      />
    </Layout>
  );
});
