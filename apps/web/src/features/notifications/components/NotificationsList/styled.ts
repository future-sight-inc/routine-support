import { Button } from "apps/web/src/styled/components/Button";
import { Typography } from "apps/web/src/styled/components/Typography";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ClearAllButton = styled(Button).attrs(() => ({
  variant: "secondary",
}))`
  width: 160px;
`;

export const NotificationGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NotificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const NotificationGroupDate = styled(Typography).attrs(() => ({
  variant: "text1",
  color: "secondary",
}))`
  text-transform: capitalize;
`;

export const EmptyText = styled(Typography).attrs(() => ({
  variant: "text1",
  color: "secondary",
}))`
  margin-top: 16px;
  text-align: center;
`;
