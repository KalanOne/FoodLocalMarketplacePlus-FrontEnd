import { http } from "../../../api/api";
import { LoginData } from "../types/loginTypes";

export { loginPost };

async function loginPost(data: LoginData): Promise<any> {
  return await http<any>({
    method: "POST",
    path: `usuario/login`,
    data: data,
  });
}
