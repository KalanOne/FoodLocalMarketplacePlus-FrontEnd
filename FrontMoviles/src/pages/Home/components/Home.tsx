import { Container } from "@mui/material";
import React from "react";
import { Portal } from "../../../components/common/Portal";
import TabsMenu from "../../../components/common/TabsMenu";

function Home(): React.ReactElement {
  return (
    <>
      <Container title={"Log In"}>
        <Portal elementId={"navbarPortal"}>
          <TabsMenu pageId={0} />
        </Portal>
      </Container>
    </>
  );
}

export default Home;
