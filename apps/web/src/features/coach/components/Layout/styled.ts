import PersonIcon from "@mui/icons-material/Person";
import { Button, Typography } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 200px 1fr;
  height: 100vh;
`;

export const Header = styled.div`
  background: ${({ theme }) => theme.palette.primary.main};
  height: 69px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  box-sizing: border-box;
`;

export const Sidebar = styled.nav`
  grid-column: 1;
  grid-row-start: 1;
  grid-row-end: 3;
  display: flex;
  flex-direction: column;

  & * {
    color: ${({ theme }) => theme.palette.common.white};
  }

  & .active {
  }
`;

export const Content = styled.div`
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin: 0 auto;
  grid-column-start: 2;
`;

export const FooterWrapper = styled.div`
  grid-column: 2;
  grid-row: 2;
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

export const HomeItemIcon = styled(ListItemIcon)`
  position: relative;
`;

export const DayNumber = styled(Typography)`
  font-size: 10px;
  position: absolute;
  top: 7px;
  left: 0;
  width: 24px;
  text-align: center;
`;

export const UserWrapper = styled.div`
  color: ${({ theme }) => theme.palette.common.white};
  display: flex;
  align-items: center;

  margin-right: auto;
`;

export const Name = styled(Typography)`
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserIcon = styled(PersonIcon)`
  font-size: 32px;
  margin-right: 8px;
`;

export const LogoutButton = styled(Button)`
  background: rgba(0, 0, 0, 0.1);
  margin-top: auto;
  height: 48px;
`;
