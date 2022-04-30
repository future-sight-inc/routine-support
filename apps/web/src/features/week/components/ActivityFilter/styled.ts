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

export const FiltersWrapper = styled.div`
  height: calc(100vh - 520px);
  overflow: scroll;
`;

export const FilterWrapper = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-left: 8px;
  box-sizing: border-box;
  margin-bottom: 8px;

  p {
    width: 135px;
    overflow: hidden;
    white-space: nowrap;
    display: block;
    text-overflow: ellipsis;
  }

  &:hover {
    ${({ theme }) =>
    css`
        background: ${theme.palette.secondary.main};
        border-radius: ${theme.borderRadius};
      `};
  }
`;

export const Checkbox = styled(UICheckbox)``;
