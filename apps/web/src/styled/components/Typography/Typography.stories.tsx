import { select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { Typography } from "./Typography";

const Layout = styled.div``;

storiesOf("Typography", module)
  .add("Variations", () => (
    <Layout>
      <Typography variant="caption4">Caption4/20px/bold</Typography>
      <Typography variant="text1">Text1/16px/normal</Typography>
      <Typography variant="text2">Text2/14px/normal</Typography>
      <Typography variant="text3">Text3/12px/normal</Typography>
      <Typography variant="text1Bold">Text1/16px/bold</Typography>
      <Typography variant="text2Bold">Text2/14px/bold</Typography>
      <Typography variant="text3Bold">Text3/12px/bold</Typography>
    </Layout>
  ))
  .add("Customize", () => (
    <Layout>
      <Typography
        variant={select(
          "Variant",
          [
            "caption4",
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
