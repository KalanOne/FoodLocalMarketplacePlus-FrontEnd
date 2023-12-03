import { http } from "../../../api/api";
import { LoginData } from "../types/loginTypes";
import { RegisterData } from "../types/registerTypes";

export { loginPost, registerPost, categoriasP };

async function loginPost(data: LoginData): Promise<any> {
  return await http<any>({
    method: "POST",
    path: `proveedor/login`,
    data: data,
  });
}

async function registerPost(data: RegisterData): Promise<any> {
  return await http<any>({
    method: "POST",
    path: `proveedor/`,
    data: data,
    // dataWithFiles: true,
  });
}

async function categoriasP(): Promise<any> {
  return await http<any>({
    method: "GET",
    path: `categoriaProveedor`,
  });
}
