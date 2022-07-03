import styled, { css } from "styled-components";

import { Typography } from "../../styled/components/Typography";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CheckboxWrapper = styled.div``;

export const MessageWrapper = styled.div`
  padding: 8px;

  ${({ theme }) => css`
    background: ${theme.palette.primary.message};
    border-radius: ${theme.borderRadius.s};
  `}
`;

export const Message = styled(Typography)``;
