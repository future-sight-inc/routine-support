import { useState } from "react";

import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { Button } from "../../styled/components/Button";
import { Modal } from "./Modal";

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

storiesOf("Components", module).add("Modal", () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
  };

  const handleClose = () => {
    setIsOpened(false);
  };

  return (
    <Layout>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal isOpened={isOpened} onClose={handleClose} />
    </Layout>
  );
});
