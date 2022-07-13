import { useSafeAreaInsets } from "react-native-safe-area-context";

import { LayoutProps } from "./Layout";

export const Layout: React.FC<Omit<LayoutProps, "insets">> = (props) => {
  const insets = useSafeAreaInsets();

  return <Layout {...props} insets={insets} />;
};
