import { Button } from "apps/web/src/styled/components/Button";
import { Typography } from "apps/web/src/styled/components/Typography";
import { Link as UILink } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  border: 1px solid ${({ theme }) => theme.palette.border.light};
  border-radius: ${({ theme }) => theme.borderRadius.l};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled(Typography).attrs(() => ({
  variant: "caption4",
}))``;

export const SubmitButton = styled(Button)``;

export const ButtonWrapper = styled(FieldsWrapper)``;

export const Link = styled(UILink)``;

export const LinkText = styled(Typography).attrs(() => ({
  variant: "text2",
}))`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.palette.secondary.text};
  `}

  & ${Link} {
    text-decoration: none;

    ${({ theme }) => css`
      color: ${theme.palette.primary.main};
    `}

    &:hover {
      text-decoration: underline;
    }
  }
`;
