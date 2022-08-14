export enum StudentsSelectorLocators {
  Wrapper = "StudentsSelectorWrapper",
  EmptyText = "StudentsSelectorEmptyText",
  StudentBadge = "StudentsSelectorStudentBadge",
}

export const createStudentBadgeTestId = ({ id }: { id: string }) => {
  return `${StudentsSelectorLocators.StudentBadge}-${id}`;
};
