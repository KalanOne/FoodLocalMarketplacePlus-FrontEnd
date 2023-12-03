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

interface ResenaCardProps {
  resena: any;
}

function ResenaCard({ resena }: ResenaCardProps): React.ReactElement {
  return (
    <Card sx={{ width: "100%", maxHeight: "400px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {resena.idUsuario.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={resena.idUsuario}
        subheader={formatFecha(resena.createdAt)}
      />
      {/* <CardMedia sx={{ height: 240}} image={imagen} /> */}
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
  );
}

export default ResenaCard;
