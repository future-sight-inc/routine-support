import React from "react";

import { useStudents } from "./useStudents";

export const Students: React.FC = () => {
  const { models, operations } = useStudents();

  return <p>Here will be students</p>;
};
