import { storiesOf } from "@storybook/react";
import moment from "moment";
import styled from "styled-components";

import { MiniCalendar } from "./MiniCalendar";

const Layout = styled.div`
  width: 180px;
`;

storiesOf("Week", module).add("MiniCalendar", () => {
  return (
    <Layout>
      <MiniCalendar
        currentDate={moment()}
        // eslint-disable-next-line
        onWeekSelect={(week) => console.log(week)}
      />
    </Layout>
  );
});
