import React from "react";
import Container from "../../../components/common/Container";
import { Box, Typography } from "@mui/material";
import useAuthRedirect from "../../../hooks/redirect";
import HomeImage from "../../../assets/HomeImage.png";

function Home(): React.ReactElement {
  useAuthRedirect({});
  // const correoA = useJwt((state) => state.correo);

  return (
    <Container>
      <Box
        component={"div"}
        sx={{
          display: "flex",
          backgroundImage: `url(${HomeImage})`, // Reemplaza con la ruta de tu imagen
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h6">Bienvenido a PonyFood</Typography>
      </Box>
    </Container>
  );
}

export default Home;
