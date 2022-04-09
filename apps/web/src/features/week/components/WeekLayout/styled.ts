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
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CalendarWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const Body = styled.div`
  position: relative;
  max-height: calc(100% - 160px);
  overflow-y: scroll;
`;
