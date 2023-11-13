import React from "react";
import { Portal } from "../../../components/common/Portal";
import TabsMenu from "../../../components/common/TabsMenu";
import Container from "../../../components/common/Container";
import { Typography } from "@mui/material";

function Home(): React.ReactElement {
  return (
    <>
      <Container title={"Home"}>
        <Typography variant="h6" align="center">Bienvenido</Typography>
        <Portal elementId={"navbarPortal"}>
          <TabsMenu pageId={0} />
        </Portal>
      </Container>
    </>
  );
}

export default Home;
