import ClearIcon from "@mui/icons-material/Clear";
import { TextField } from "apps/web/src/components/TextField/styled";
import { Typography } from "apps/web/src/styled/components/Typography";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const FieldWrapper = styled.div<{ isActive?: boolean }>`
  ${({ theme, isActive }) => css`
    display: flex;
    flex-direction: column;
    gap: 4px;
    cursor: pointer;
    border-radius: ${theme.borderRadius.s};
    padding: 8px;
    transition: background 0.2s;

    &:hover {
      background: ${theme.palette.secondary.main};

      ${StudentWrapper} {
        background: ${theme.palette.common.white};
      }
    }

    ${isActive &&
    css`
      background: ${theme.palette.secondary.main};

      ${StudentWrapper} {
        background: ${theme.palette.common.white};
      }
    `}
  `}
`;

export const OpenText = styled(Typography).attrs(() => ({
  color: "primary",
}))`
  height: 40px;
  line-height: 40px;
`;

export const SearchField = styled(TextField)`
  border: none;
  background: none;
  padding: 0;
`;

export const StudentsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const StudentWrapper = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  transition: background 0.2s;

  ${({ theme }) => css`
    background: ${theme.palette.secondary.main};
    border-radius: ${theme.borderRadius.s};
  `}
`;

export const StudentName = styled(Typography)``;

export const DeleteStudentIcon = styled(ClearIcon).attrs(() => ({
  sx: { fontSize: 14 },
}))`
  color: ${({ theme }) => theme.palette.secondary.text};

  &:hover {
    color: ${({ theme }) => theme.palette.primary.text};
  }
`;
