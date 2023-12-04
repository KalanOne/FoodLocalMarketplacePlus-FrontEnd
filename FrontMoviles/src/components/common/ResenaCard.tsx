import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { formatFecha } from "../../utils/Fecha";
import { getUsuario } from "../../pages/Resenas/api/resenaApi";
import { useQuery } from "react-query";

interface ResenaCardProps {
  resena: any;
}

function ResenaCard({ resena }: ResenaCardProps): React.ReactElement {
  const usuarioQuery = useQuery({
    queryKey: ["usuario"],
    queryFn: async () => {
      return await getUsuario(resena.idUsuario);
    },
  });
  const usuario = usuarioQuery.data?.data ?? undefined;
  return (
    <>
      {usuario != undefined && (
        <Card sx={{ width: "100%", maxHeight: "400px" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                {usuario.nombre.charAt(0).toUpperCase()}
              </Avatar>
            }
            title={`${usuario.nombre} ${usuario.apellido}`}
            subheader={formatFecha(resena.createdAt)}
          />
          <CardContent>
            <Rating name="read-only" value={resena.calificacion} readOnly />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                overflow: "hidden",
                paddingTop: 1,
              }}
            >
              {resena.resena}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
}

export default ResenaCard;
