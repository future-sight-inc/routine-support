import { Checkbox as UICheckbox } from "apps/web/src/components/Checkbox";
import { Typography } from "apps/web/src/styled/components/Typography";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  align-self: flex-start;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled(Typography).attrs(() => ({
  variant: "text1Bold",
}))`
  position: fixed;
  width: 180px;
  padding-bottom: 1em;
  margin-top: -2px;

  ${({ theme }) =>
    css`
      background: ${theme.palette.common.white};
    `};
`;

export const FiltersWrapper = styled.div``;

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

  &:first-child {
    margin-top: 2em;
  }

  &:hover {
    ${({ theme }) =>
    css`
        background: ${theme.palette.secondary.main};
        border-radius: ${theme.borderRadius.s};
      `};
  }
`;

export const Checkbox = styled(UICheckbox)``;
