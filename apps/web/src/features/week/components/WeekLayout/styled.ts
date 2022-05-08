import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 16px;
  overflow: hidden;
`;

export const Head = styled.div`
  height: 40px;
  display: grid;
  padding-left: 60px;
  gap: 1px;
`;

export const ActionsWrapper = styled.div`
  height: calc(100vh - 132px);
  display: grid;
  grid-template-rows: 40px max-content 1fr;
  gap: 24px;
`;

export const FilterWrapper = styled.div``;

export const MiniCalendarWrapper = styled.div``;

export const CalendarWrapper = styled.div`
  height: calc(100vh - 132px);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const Body = styled.div`
  position: relative;
  overflow-y: scroll;
`;
