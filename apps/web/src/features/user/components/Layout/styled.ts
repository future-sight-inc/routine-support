import PersonIcon from "@mui/icons-material/Person";
import { Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr;
  grid-template-columns: 250px 1fr;
  height: 100vh;
`;

export const Header = styled.div`
  background: ${({ theme }) => theme.palette.primary.main};
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  align-items: center;
  padding: 0 12px;
  box-sizing: border-box;
`;

export const Sidebar = styled.nav`
  background: ${({ theme }) => theme.palette.common.darkblue};
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  & * {
    color: ${({ theme }) => theme.palette.common.white};
  }

  & .active {
    background: ${({ theme }) => theme.palette.common.activeSidebarLink};
  }
`;

export const Content = styled.div`
  padding: 32px;
  width: 100%;
  box-sizing: border-box;
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin: 0 auto;
  grid-column-start: 2;
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

export const UserWrapper = styled.div`
  color: ${({ theme }) => theme.palette.common.white};
  display: flex;
  align-items: center;

  margin-right: auto;
`;

export const Email = styled(Typography)`
  margin-right: 8px;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserIcon = styled(PersonIcon)`
  font-size: 32px;
  margin-right: 24px;
`;

export const LogoutButton = styled(Button)`
  background: rgba(0, 0, 0, 0.1);
  margin-top: auto;
  height: 40px;
`;
