import { http } from "../../../api/api";

export {getProductoResena};


async function getProductoResena(id: string | null): Promise<any> {
  return await http<any>({
    method: "GET",
    path: `producto/resena/${id}`,
  });
}
