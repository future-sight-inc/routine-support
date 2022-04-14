import { Checkbox as UICheckbox } from "apps/web/src/components/Checkbox";
import { Typography } from "apps/web/src/styled/components/Typography";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  align-self: flex-start;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const Title = styled(Typography).attrs(() => ({
  variant: "text1Bold",
}))``;

export const FilterWrapper = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-left: 8px;
  box-sizing: border-box;

  &:hover {
    ${({ theme }) =>
    css`
        background: ${theme.palette.secondary.main};
        border-radius: ${theme.borderRadius};
      `};
  }
`;

export const Checkbox = styled(UICheckbox)``;
