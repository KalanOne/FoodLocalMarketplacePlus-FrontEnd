import { http } from "../../../api/api";
import { CategoriaProducto, CrearProducto } from "../types/productosTypes";

export { crearProducto, categoriaProducto, getProductos };

async function crearProducto(data: CrearProducto): Promise<any> {
  return await http<any>({
    method: "POST",
    path: `producto/`,
    data: data,
  });
}

async function categoriaProducto(): Promise<any> {
  return await http<CategoriaProducto[]>({
    method: "GET",
    path: `categoriaProducto/`,
  });
}

async function getProductos(id: string | null): Promise<any> {
  return await http<CategoriaProducto[]>({
    method: "GET",
    path: `producto/${id}`,
  });
}
