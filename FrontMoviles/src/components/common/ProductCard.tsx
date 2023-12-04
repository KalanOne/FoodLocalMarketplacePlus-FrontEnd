import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Producto } from "../../pages/Productos/types/productosTypes";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
  producto: Producto;
  onEdit: (producto: Producto) => void;
  onDelete: (producto: Producto) => void;
}

function ProductCard({
  nombre,
  precio,
  descripcion,
  imagen,
  producto,
  onDelete,
  onEdit,
}: ProductCardProps): React.ReactElement {
  const navigate = useNavigate();
  function onImagePress(id: number) {
    navigate(`/resena/producto/${id}`);
  }

  return (
    <Card sx={{ width: "100%", maxHeight: "500px" }}>
      <Box
        component={"img"}
        sx={{ height: 300, width: "100%" }}
        src={imagen}
        crossOrigin="anonymous"
        title={nombre}
        onClick={() => onImagePress(producto.id)}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {nombre}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {`${precio.toLocaleString("es-MX", {
            style: "currency",
            currency: "MXN",
          })}`}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onDelete(producto)}>
          Eliminar
        </Button>
        <Button size="small" onClick={() => onEdit(producto)}>
          Editar
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
