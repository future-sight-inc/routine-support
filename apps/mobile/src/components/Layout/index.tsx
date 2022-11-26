import React from "react";

import { LayoutProps, Layout as UncontrolledLayout } from "./Layout";

export const Layout: React.FC<Omit<LayoutProps, "insets">> = (props) => {
  return <UncontrolledLayout {...props} />;
};
