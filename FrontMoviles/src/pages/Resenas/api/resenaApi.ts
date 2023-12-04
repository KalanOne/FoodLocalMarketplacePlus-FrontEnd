import { http } from "../../../api/api";

export {getProductoResena, getUsuario};


async function getProductoResena(id: string | null): Promise<any> {
  return await http<any>({
    method: "GET",
    path: `producto/resena/${id}`,
  });
}

async function getUsuario(id: string | null): Promise<any> {
  return await http<any>({
    method: "GET",
    path: `usuario/${id}`,
  });
}
