import axios, { AxiosRequestConfig } from "axios";

export { http };

interface HttpArguments {
  path: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  data?: any;
  params?: Record<string, string | undefined>;
}

const http = async <T>({
  path,
  method = "POST",
  data = {},
  params = {},
}: HttpArguments): Promise<T> => {
  // for (const k in params) {
  //   if (params[k] === null || params[k] === undefined) {
  //     delete params[k];
  //   }
  // }

  const request: AxiosRequestConfig = {
    method,
    params,
    data,
    url: `http://localhost:3000/${path}`,
    headers: {},
  };

  const response = await axios(request);
  return response.data as T;
};
