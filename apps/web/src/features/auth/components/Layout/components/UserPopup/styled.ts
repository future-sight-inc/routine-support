import PersonIcon from "@mui/icons-material/Person";
import { Typography } from "@mui/material";
import styled from "styled-components";

export const UserWrapper = styled.div`
  margin-left: auto;
  color: ${({ theme }) => theme.palette.common.white};
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Email = styled(Typography)`
  margin-right: 8px;
`;

export const UserIcon = styled(PersonIcon)`
  font-size: 32px;
`;
