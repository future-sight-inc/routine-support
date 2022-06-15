import { createMockActivity } from "@routine-support/domains";
import { parseTime } from "@routine-support/utils";
import { storiesOf } from "@storybook/react";
import { GROUP_ACTIVITY_COLOR } from "apps/web/src/constants/DefaultActivityColor";
import styled from "styled-components";

import { ActivityCard } from ".";
import { ActivityCardProps } from "./ActivityCard";

const Layout = styled.div`
  position: relative;
  width: 220px;
  height: 160px;
`;

const createActivityCardProps = (): ActivityCardProps => {
  return {
    rowStart: 0,
    index: 0,
    count: 1,
    activity: createMockActivity({
      name: "BBQ",
      start: parseTime("12:00"),
      end: parseTime("13:00"),
    }),
    backgroundColor: GROUP_ACTIVITY_COLOR,
    confirmationStatus: null,
    onClick: () => null,
  };
};

storiesOf("Week/Calendar", module).add("ActivityCard", () => (
  <Layout>
    <ActivityCard {...createActivityCardProps()} />
  </Layout>
));
