import { http } from "../../../api/api";
import { ActualizarProveedor, Proveedor } from "../types/proveedorTypes";

export { getProveedor, actualizarProveedor, imagenProveedor };

async function getProveedor(id: string | null): Promise<any> {
  return await http<Proveedor>({
    method: "GET",
    path: `proveedor/${id}`,
  });
}

async function actualizarProveedor(data: any): Promise<any> {
  return await http<ActualizarProveedor>({
    method: "PUT",
    path: `proveedor`,
    data: data,
  });
}

async function imagenProveedor(data: any): Promise<any> {
  return await http<ActualizarProveedor>({
    method: "POST",
    path: `imagen/proveedor`,
    data: data,
    dataWithFiles: true,
  });
}
