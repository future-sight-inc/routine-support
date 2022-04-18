import { storiesOf } from "@storybook/react";
import styled, { css } from "styled-components";

import { Typography } from "./components/Typography";
import { Theme } from "./theme";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyledSquare = styled.div<{
  level: string;
  name: string;
}>`
  height: 50px;
  width: 50px;
  ${({ theme, level, name }) => css`
    border-radius: ${theme.borderRadius};
    background: ${theme.palette[level][name]};
  `}
`;

const Name = styled(Typography)`
  text-transform: capitalize;
`;

const Square = ({ level, name }: { level: string; name: string }) => {
  return (
    <Section>
      <Name>
        {name} {Theme.palette[level][name]}
      </Name>
      <StyledSquare level={level} name={name} />
    </Section>
  );
};

storiesOf("Style Kit/Palette", module).add("All", () => (
  <Layout>
    <Section>
      <Typography variant="caption4">Primary</Typography>
      <Column>
        <Square level="primary" name="main" />
        <Square level="primary" name="hovered" />
        <Square level="primary" name="clicked" />
        <Square level="primary" name="text" />
      </Column>
    </Section>
    <Section>
      <Typography variant="caption4">Secondary</Typography>
      <Column>
        <Square level="secondary" name="main" />
        <Square level="secondary" name="hovered" />
        <Square level="secondary" name="clicked" />
        <Square level="secondary" name="text" />
      </Column>
    </Section>
    <Section>
      <Typography variant="caption4">Error</Typography>
      <Column>
        <Square level="error" name="main" />
        <Square level="error" name="text" />
      </Column>
    </Section>
    <Section>
      <Typography variant="caption4">Border</Typography>
      <Column>
        <Square level="border" name="main" />
      </Column>
    </Section>
    <Section>
      <Typography variant="caption4">Common</Typography>
      <Column>
        <Square level="common" name="black" />
        <Square level="common" name="white" />
        <Square level="common" name="lightblue" />
        <Square level="common" name="green" />
        <Square level="common" name="yellow" />
        <Square level="common" name="blue" />
        <Square level="common" name="purple" />
        <Square level="common" name="pink" />
        <Square level="common" name="red" />
        <Square level="common" name="mint" />
        <Square level="common" name="orange" />
        <Square level="common" name="brown" />
        <Square level="common" name="darkgreen" />
      </Column>
    </Section>
  </Layout>
));
