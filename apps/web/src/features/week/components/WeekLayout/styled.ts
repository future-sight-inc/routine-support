import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 40px calc(100vh - 140px);
  grid-template-columns: auto 1fr;
  gap: 16px;
  overflow: hidden;
`;

export const Head = styled.div`
  height: 40px;
  display: grid;
  grid-template-columns: 140px 7fr;
  gap: 1px;
`;

export const Column = styled.div`
  height: 100vh;
  display: grid;
  gap: 16px;
  grid-template-rows: 40px calc(100vh - 40px - 16px);
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Body = styled.div`
  position: relative;
`;
