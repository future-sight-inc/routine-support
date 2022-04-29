import React from "react";

import { createMockStudent } from "@routine-support/test-utils";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { StudentBadge } from "./StudentBadge";

const Layout = styled.div`
  display: flex;
  gap: 8px;
`;

storiesOf("Components", module).add("StudentBadge", () => {
  const student = createMockStudent();

  return (
    <Layout>
      <StudentBadge student={student} />
      <StudentBadge student={student} isPending />
    </Layout>
  );
});
