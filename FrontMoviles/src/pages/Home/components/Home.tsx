import React from "react";
import Container from "../../../components/common/Container";
import { Box, Typography } from "@mui/material";
import useAuthRedirect from "../../../hooks/redirect";

function Home(): React.ReactElement {
  useAuthRedirect({});

  return (
    <Container>
      <Box component={"div"}>
        <Typography variant="h6">Bienvenido a la tienda</Typography>
      </Box>
    </Container>
  );
}

export default Home;
