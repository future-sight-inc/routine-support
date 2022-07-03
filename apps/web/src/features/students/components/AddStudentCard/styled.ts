import AddCircle from "@mui/icons-material/AddCircle";
import styled, { css } from "styled-components";

export const Card = styled.div`
  width: 176px;
  height: 196px;

  border-radius: ${({ theme }) => theme.borderRadius.l};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    background: ${theme.palette.common.white};
  `}

  &:hover {
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.palette.primary.main}
      inset;
  }
`;

export const AddIcon = styled(AddCircle).attrs(() => ({
  sx: { fontSize: 80 },
}))`
  ${({ theme }) => css`
    color: ${theme.palette.primary.main};
  `}
`;
