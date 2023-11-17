import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "react-query";
export { mutationFood };

interface MutationOptions {
  onSuccess?: (response: any) => void;
  onError?: (error: AxiosError) => void;
}

function mutationFood(
  apiFunction: (data: any) => Promise<any>,
  name: string,
  options?: MutationOptions
) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: apiFunction,
    onSuccess: (response) => {
      if (options?.onSuccess) {
        options.onSuccess(response);
      }
      queryClient.invalidateQueries({ queryKey: [name] });
    },
    onError: (error: AxiosError) => {
      const errorData: any = error.response?.data;
      console.log(errorData);
      if (options?.onError) {
        options.onError(error);
      }
    },
  });

  return mutation;
}
