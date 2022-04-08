import { rgba } from "polished";
import styled, { css } from "styled-components";

import { Typography } from "../../styled/components/Typography";

export const Wrapper = styled.div`
  padding: 0 16px;

  ${({ theme }) =>
    css`
      background: ${theme.palette.common.white};
      box-shadow: 0 0 20px ${rgba(theme.palette.common.black, 0.2)};
    `};
`;

export const Content = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  margin: 0 auto;

  max-width: ${({ theme }) => theme.size.maxWidth};
`;

export const UserWrapper = styled.div`
  width: 180px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserEmail = styled(Typography).attrs(() => ({
  variant: "text2Bold",
}))`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 16px;
`;

export const LogoutText = styled(Typography).attrs(() => ({
  variant: "text2Bold",
}))``;

export const LogoutWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-left: auto;
  align-items: center;
  cursor: pointer;
  height: 50px;

  ${LogoutText}, & * {
    color: ${({ theme }) => theme.palette.secondary.text};
  }

  &:hover {
    ${LogoutText},& * {
      color: ${({ theme }) => theme.palette.common.black};
    }
  }
`;
