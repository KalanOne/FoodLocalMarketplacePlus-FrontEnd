import React from "react";
import Container from "../../../components/common/Container";
import { Box, Button, Typography } from "@mui/material";
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
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            paddingTop: 2,
            fontSize: "30px",
            fontWeight: "bold",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Bienvenido a PonyFood
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;
