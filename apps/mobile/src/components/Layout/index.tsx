import React from "react";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { LayoutProps, Layout as UncontrolledLayout } from "./Layout";

export const Layout: React.FC<Omit<LayoutProps, "insets">> = (props) => {
  const insets = useSafeAreaInsets();

  return <UncontrolledLayout {...props} insets={insets} />;
};
