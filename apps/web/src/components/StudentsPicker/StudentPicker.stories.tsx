import { createMockStudent } from "@routine-support/domains";
import { storiesOf } from "@storybook/react";
import { LabelWithHelper } from "apps/web/src/components/LabelWithHelper";
import styled from "styled-components";

import { StudentsPicker } from "./StudentsPicker";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 200px;
`;

const STUDENT1 = createMockStudent({ name: "Masha" });
const STUDENT2 = createMockStudent({ name: "Misha" });
const STUDENT3 = createMockStudent({ name: "Nikita" });
const STUDENT4 = createMockStudent({ name: "Pasha" });
const STUDENTS = [STUDENT1, STUDENT2, STUDENT3, STUDENT4];

storiesOf("Students", module).add("StudentsPicker", () => (
  <Layout>
    <LabelWithHelper>Students</LabelWithHelper>
    <StudentsPicker students={STUDENTS} onChange={() => null} />
  </Layout>
));
