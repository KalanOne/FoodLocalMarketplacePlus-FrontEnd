import React from "react";
import { Portal } from "../../../components/common/Portal";
import TabsMenu from "../../../components/common/TabsMenu";
import Container from "../../../components/common/Container";

function Home(): React.ReactElement {
  return (
    <>
      <Container title={"Home"}>
        <div>Hola</div>
        <Portal elementId={"navbarPortal"}>
          <TabsMenu pageId={0} />
        </Portal>
      </Container>
    </>
  );
}

export default Home;
