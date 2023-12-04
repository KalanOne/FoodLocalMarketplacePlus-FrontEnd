import React from "react";
import Container from "../../../components/common/Container";
import useAuthRedirect from "../../../hooks/redirect";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getProductoResena } from "../api/resenaApi";
import { Grid, Typography } from "@mui/material";
import ResenaCard from "../../../components/common/ResenaCard";

function Resena(): React.ReactElement {
  useAuthRedirect({});
  const { id } = useParams();

  const resenaProductosQuery = useQuery({
    queryKey: ["resena"],
    queryFn: async () => {
      return await getProductoResena(id ?? null);
    },
  });
  const resenas = resenaProductosQuery.data?.data ?? [];

  return (
    <Container>
      <Typography
        variant="h6"
        sx={{
          paddingTop: 2,
          fontSize: "30px",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Reseñas
      </Typography>
      <Grid container spacing={2} sx={{ padding: 5 }}>
        {resenas.length ? (
          resenas?.map((resena: any) => (
            <Grid item xs={3} key={resena.id}>
              <ResenaCard resena={resena} />
            </Grid>
          ))
        ) : (
          <Typography
            variant="h6"
            sx={{
              width: "100%",
              paddingTop: 2,
              fontSize: "30px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            No Hay Reseñas De Este Producto
          </Typography>
        )}
      </Grid>
    </Container>
  );
}

export default Resena;
