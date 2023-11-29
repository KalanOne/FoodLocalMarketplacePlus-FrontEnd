export type { PedidosType, ProductoPedido, ActualizarEstadoPedido };

interface PedidosType {
  createdAt: string;
  estado: string;
  id: number;
  idUsuario: string;
  pagado: boolean;
  productos: ProductoPedido[];
}

interface ProductoPedido {
  id: number;
  createdAt: string;
  updatedAt: string;
  precio: number;
  cantidad: number;
  resena: number;
  idProducto: number;
  idPedido: number;
}

interface ActualizarEstadoPedido {
  id: number;
  estado: string;
}
