import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
`;

export const Header = styled.div`
  height: 60px;
  background: ${({ theme }) => theme.palette.primary.main};
`;

export const Content = styled.div`
  padding: 32px;
`;
