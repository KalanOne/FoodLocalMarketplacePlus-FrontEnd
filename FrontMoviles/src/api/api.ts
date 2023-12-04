import axios, { AxiosRequestConfig } from "axios";

export { http };

interface HttpArguments {
  path: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  data?: any;
  dataWithFiles?: boolean;
  params?: Record<string, string | undefined>;
}

const http = async <T>({
  path,
  method = "POST",
  data = {},
  dataWithFiles = false,
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
    headers: {
      Authorization: `Bearer ${await localStorage.getItem("token")}`,
      "Content-Type": !dataWithFiles
        ? "application/json"
        : "multipart/form-data",
    },
  };

  if (dataWithFiles) {
    const formData = new FormData();

    for (const k of Object.keys(data)) {
      if (Array.isArray(data[k])) {
        data[k].forEach((object: any, index: number) => {
          for (const key of Object.keys(object)) {
            formData.append(`${k}[${index}][${key}]`, object[key]);
          }
        });
      } else {
        formData.append(k, data[k]);
      }
    }

    request.data = formData;
  }

  const response = await axios(request);
  return response.data as T;
};
