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
  id: string;
  estado: number;
  pagado: string;
  imagen: string;
  onEdit: () => void;
}

function PedidoCard({
  id,
  estado,
  pagado,
  imagen,
  onEdit,
}: ProductCardProps): React.ReactElement {
  return (
    <Card sx={{ width: "100%", maxHeight: "400px" }}>
      <CardMedia sx={{ height: 240 }} image={imagen} title={"Pedido"} />
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
          {`Pedido #${id}`}
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
          {`Estado: ${estado}`}
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
          {pagado ? "Pagado" : "No pagado"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onEdit}>
          Cambiar Estado
        </Button>
      </CardActions>
    </Card>
  );
}

export default PedidoCard;
