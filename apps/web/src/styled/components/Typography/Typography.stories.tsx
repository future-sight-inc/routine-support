import { select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { Typography } from "./Typography";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

storiesOf("Style Kit/Typography", module)
  .add("Variations", () => (
    <Layout>
      <Group>
        <Typography variant="caption1">Caption1/48px/semi bold</Typography>
        <Typography variant="caption2">Caption2/30px/semi bold</Typography>
        <Typography variant="caption3">Caption3/24px/semi bold</Typography>
        <Typography variant="caption4">Caption4/20px/semi bold</Typography>
      </Group>
      <Group>
        <Typography variant="caption1Normal">Caption1Normal/48px/normal</Typography>
        <Typography variant="caption2Normal">Caption2Normal/30px/normal</Typography>
        <Typography variant="caption3Normal">Caption3Normal/24px/normal</Typography>
        <Typography variant="caption4Normal">Caption4Normal/20px/normal</Typography>
      </Group>
      <Group>
        <Typography variant="text1">Text1/16px/normal</Typography>
        <Typography variant="text2">Text2/14px/normal</Typography>
        <Typography variant="text3">Text3/12px/normal</Typography>
      </Group>
      <Group>
        <Typography variant="text1Bold">Text1Bold/16px/bold</Typography>
        <Typography variant="text2Bold">Text2Bold/14px/bold</Typography>
        <Typography variant="text3Bold">Text3Bold/12px/bold</Typography>
      </Group>
      <Group>
        <Typography variant="text2">Normal</Typography>
        <Typography variant="text2" color="primary">
          Primary
        </Typography>
        <Typography variant="text2" color="secondary">
          Secondary
        </Typography>
        <Typography variant="text2" color="error">
          Error
        </Typography>
      </Group>
    </Layout>
  ))
  .add("Customize", () => (
    <Layout>
      <Typography
        variant={select(
          "Variant",
          [
            "caption1",
            "caption2",
            "caption3",
            "caption4",
            "caption1Normal",
            "caption2Normal",
            "caption3Normal",
            "caption4Normal",
            "text1",
            "text2",
            "text3",
            "text1Bold",
            "text2Bold",
            "text3Bold",
          ],
          "text2"
        )}
        color={select("Color", ["normal", "secondary", "primary"], "normal")}
      >
        {text("Text", "Hello Storybook")}
      </Typography>
    </Layout>
  ));
