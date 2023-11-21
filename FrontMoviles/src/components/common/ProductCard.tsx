import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

interface ProductCardProps {
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
  onEdit: () => void;
  onDelete: () => void;
}

function ProductCard({
  nombre,
  precio,
  descripcion,
  imagen,
  onDelete,
  onEdit,
}: ProductCardProps): React.ReactElement {
  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia sx={{ height: 240 }} image={imagen} title={nombre} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nombre}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {`$ ${precio}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onDelete}>Eliminar</Button>
        <Button size="small" onClick={onEdit}>Editar</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
