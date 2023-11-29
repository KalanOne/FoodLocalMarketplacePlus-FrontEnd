import { http } from "../../../api/api";
import { ActualizarEstadoPedido } from "../types/pedidosTypes";

export { pedidosProveedor, actualizarEstado };

async function pedidosProveedor(): Promise<any> {
  return await http<any>({
    method: "GET",
    path: `pedido/proveedor`,
  });
}

async function actualizarEstado(data: ActualizarEstadoPedido): Promise<any> {
  return await http<any>({
    method: "PUT",
    path: `pedido/${data.id}`,
    data: data,
  });
}
