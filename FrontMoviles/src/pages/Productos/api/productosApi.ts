import { http } from "../../../api/api";
import { CrearProducto } from "../types/productosTypes";

export { crearProducto };

async function crearProducto(data: CrearProducto): Promise<any> {
  return await http<any>({
    method: "POST",
    path: `producto/`,
    data: data,
  });
}
