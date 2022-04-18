import PersonIcon from "@mui/icons-material/Person";
import { Button, Typography } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-row: 50px 1fr 50px;
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
