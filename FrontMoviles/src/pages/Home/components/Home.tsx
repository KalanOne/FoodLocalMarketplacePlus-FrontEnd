import React, { useEffect } from "react";
import Container from "../../../components/common/Container";
import { Box, Typography } from "@mui/material";
import useAuthRedirect from "../../../hooks/redirect";
import { useJwt } from "../../../stores/jwt";

function Home(): React.ReactElement {
  useAuthRedirect({});
  // const correoA = useJwt((state) => state.correo);

  return (
    <Container>
      <Box component={"div"}>
        <Typography variant="h6">Bienvenido a la tienda</Typography>
      </Box>
    </Container>
  );
}

export default Home;
