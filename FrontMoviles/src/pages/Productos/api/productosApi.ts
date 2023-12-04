import { http } from "../../../api/api";
import {
  ActualizarProducto,
  CategoriaProducto,
  CrearProducto,
  ImagenProducto,
} from "../types/productosTypes";

export {
  crearProducto,
  categoriaProducto,
  getProductos,
  actualizarProductos,
  eliminarProductos,
  actualizarImagenProductos
};

async function crearProducto(data: CrearProducto): Promise<any> {
  return await http<any>({
    method: "POST",
    path: `producto/`,
    data: data,
    // dataWithFiles: true,
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

async function actualizarProductos(data: ActualizarProducto): Promise<any> {
  return await http<any[]>({
    method: "PUT",
    path: `producto/${data.id}`,
    data: data,
  });
}

async function eliminarProductos(id: number): Promise<any> {
  return await http<any>({
    method: "DELETE",
    path: `producto/${id}`,
  });
}

async function actualizarImagenProductos(data: ImagenProducto): Promise<any> {
  return await http<any[]>({
    method: "POST",
    path: `imagen/producto/${data.id}`,
    data: data,
    dataWithFiles: true,
  });
}
