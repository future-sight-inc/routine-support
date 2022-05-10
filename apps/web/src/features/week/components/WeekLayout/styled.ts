import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 16px;
`;

export const Head = styled.div`
  height: 40px;
  display: grid;
  padding-left: 60px;
  gap: 1px;
`;

export const ActionsWrapper = styled.div`
  display: grid;
  grid-template-rows: 40px auto 1fr;
  gap: 24px;
  overflow: hidden;
`;

export const FilterWrapper = styled.div`
  overflow: scroll;
`;

export const MiniCalendarWrapper = styled.div``;

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const Body = styled.div`
  position: relative;
  overflow-y: scroll;
`;
