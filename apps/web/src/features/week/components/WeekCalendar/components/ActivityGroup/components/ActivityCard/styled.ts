import { Typography } from "apps/web/src/styled/components/Typography";
import { css } from "styled-components";
import styledComponents from "styled-components";
import styled from "styled-container-query";

const TimeText = styledComponents(Typography).attrs(() => ({
  variant: "text2",
}))``;

export const Time = styled(TimeText)`
  &:container(max-width: 100px) {
    visibility: hidden;
    height: 0;
  }

  &:container(min-width: 140px) {
    visibility: visible;
  }
`;

const NameText = styledComponents(Typography).attrs(() => ({
  variant: "text1Bold",
}))``;

export const Name = styled(NameText)`
  &:container(max-width: 140px) {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &:container(max-height: 100px) {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const Wrapper = styled.div<{
  rowStart: number;
  marginTop: number;
  count: number;
  index: number;
  height: number;
  backgroundColor: string;
}>`
  box-sizing: border-box;
  overflow: hidden;

  background: ${({ backgroundColor }) => backgroundColor};

  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  padding: 8px;

  &:container(max-width: 100px) {
    padding: 4px;
  }

  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.m};
  `}

  ${({ rowStart, marginTop, count, index, height, theme }) => css`
    top: calc(
      ${rowStart} * ${theme.size.cellHeight} + ${marginTop} *
        ${theme.size.cellHeight} + 1px * ${rowStart}
    );
    height: calc(${height} * ${theme.size.cellHeight} + ${height}px - 1px);
    width: calc(100% / ${count} - 4px);
    left: calc(100% / ${count} * ${index} + 2px);
  `}

  pointer-events: all;
  cursor: pointer;

  &:container(max-height: 100px) {
    ${Time} {
      display: none;
    }
  }
`;
