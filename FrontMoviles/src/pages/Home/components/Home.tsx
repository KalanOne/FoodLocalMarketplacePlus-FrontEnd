import React from "react";
import { Portal } from "../../../components/common/Portal";
import TabsMenu from "../../../components/common/TabsMenu";
import Container from "../../../components/common/Container";
import { Box, Typography } from "@mui/material";
import useAuthRedirect from "../../../hooks/redirect";

function Home(): React.ReactElement {
  const auth = useAuthRedirect({
    loginPath: "/",
    indexPath: "/home",
  });

  return (
    <>
      {auth && (
        <Container>
          <Box
            component={"div"}
            sx={{
              bgcolor: "#EF2F29",
              height: "90vh",
            }}
          >
            <Typography variant="h6">Bienvenido a la tienda</Typography>
          </Box>
          <Portal elementId={"navbarPortal"}>
            <TabsMenu pageId={0} />
          </Portal>
        </Container>
      )}
    </>
  );
}

export default Home;
