import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
`;

export const Header = styled.div`
  background: ${({ theme }) => theme.palette.primary.main};
`;

export const HeaderInner = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  max-width: ${({ theme }) => theme.size.maxWidth};
  padding: 0 32px;
  box-sizing: border-box;
`;

export const Content = styled.div`
  padding: 32px;
  width: 100%;
  box-sizing: border-box;
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin: 0 auto;
`;

export const Links = styled.div`
  display: flex;
  gap: 12px;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: ${({ theme }) => theme.palette.common.white};
  }
`;
