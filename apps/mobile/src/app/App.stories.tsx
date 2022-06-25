import { storiesOf } from "@storybook/react-native";
import React from "react";
import { App } from "./App";
import { Text } from "react-native";

const props = {};

storiesOf("App", module).add("Primary", () => <App {...props} />);

storiesOf("App", module).add("Sample story", () => <Text>Hello world!</Text>);
