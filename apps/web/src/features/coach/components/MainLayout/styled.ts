import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  height: 100vh;
  cursor: default;
`;

export const HeaderWrapper = styled.div`
  height: 50px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin: 0 auto;
  overflow: hidden;
`;

export const FooterWrapper = styled.div``;
