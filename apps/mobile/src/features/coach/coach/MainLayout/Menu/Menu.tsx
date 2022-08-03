import React, { ReactNode } from "react";

import { Modal } from "apps/mobile/src/components/Modal";
import { Typography } from "apps/mobile/src/components/Typography";

interface MenuProps {
  pressElement: ReactNode;
}

export const Menu: React.FC<MenuProps> = ({ pressElement }) => {
  return (
    <Modal pressElement={pressElement} title="Menu">
      <Typography>Fuck</Typography>
    </Modal>
  );
};
